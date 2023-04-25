import React, { useRef, useState, useEffect } from 'react'

const silderThumbWidth = 16
const sliderThumbHeight = 16

interface SliderValue {
	value: number
	label: string
}

export interface DiscreteSliderProps {
	values: SliderValue[]
	selected: SliderValue
	onChange: (value: SliderValue) => void
	height?: number
	backgroundColor?: string
	foregroundColor?: string
	startPadding?: number
	endPadding?: number
}

const DiscreteSlider: React.FC<DiscreteSliderProps> = ({
	values,
	selected,
	onChange,
	backgroundColor = '#e2e2e21a',
	foregroundColor = '#2279CE',
	height = 16,
	startPadding = 7,
	endPadding = 7,
}) => {
	const containerRef = useRef<HTMLDivElement>()
	const [availableWidth, setAvailableWidth] = useState(0)
	const [selectedValue, setselectedValue] = useState(values.indexOf(selected))
	const [coveredWidth, setCoveredWidth] = useState(0)
	const isScrubbing = useRef(false)

	useEffect(() => {
		setAvailableWidth(containerRef.current.offsetWidth - (endPadding + startPadding))
		setCoveredWidth(startPadding + sliderStopsOnXAxis[selectedValue])
	}, [])

	const sliderStopsOnXAxis = values.map((_, i) => (availableWidth / (values.length - 1)) * i)
	const getClosestValue = (x: number) => sliderStopsOnXAxis.reduce((prev, curr) => (Math.abs(curr - x) < Math.abs(prev - x) ? curr : prev))

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = containerRef.current.getBoundingClientRect()
		const xCordinate = e.clientX - rect.left

		if (xCordinate > availableWidth) {
			isScrubbing.current = false
			return
		}

		if (isScrubbing.current) {
			e.preventDefault()

			const index = sliderStopsOnXAxis.findIndex((stop) => stop === getClosestValue(xCordinate))
			setCoveredWidth(xCordinate)
			setselectedValue(index)
			onChange(values[index])
		}
	}

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = containerRef.current.getBoundingClientRect()
		const xCordinate = e.clientX - rect.left

		const scrubbing = (e.buttons & 1) === 1
		isScrubbing.current = scrubbing

		if (scrubbing) {
			setCoveredWidth(xCordinate + startPadding)
		} else {
			setCoveredWidth(getClosestValue(xCordinate) + startPadding)
			const index = sliderStopsOnXAxis.findIndex((stop) => stop === getClosestValue(xCordinate))
			setselectedValue(index)
			onChange(values[index])
		}
		handleMouseMove(e)
	}
	const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = containerRef.current.getBoundingClientRect()
		const xCordinate = e.clientX - rect.left

		isScrubbing.current = false

		const index = sliderStopsOnXAxis.findIndex((stop) => stop === getClosestValue(xCordinate))
		setselectedValue(index)
		setCoveredWidth(getClosestValue(xCordinate))
		onChange(values[index])
	}

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (isScrubbing.current) handleMouseUp(e)
	}

	return (
		<div
			ref={containerRef}
			className='relative w-full'
			onMouseMove={handleMouseMove}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className='relative w-full rounded-full'
				style={{
					clipPath: 'polygon(0 70%, 100% 0%, 100% 100%, 0% 100%)',
					backgroundColor,
					height: height + 'px',
				}}
			>
				{/* Blue Line */}
				<div
					className='h-full'
					style={{
						width: startPadding + coveredWidth + 'px',
						backgroundColor: foregroundColor,
					}}
				></div>
			</div>
			{/* SLIDER STOPS */}
			{values.map((stop, i) => (
				<div
					key={i}
					className='absolute flex-col items-center'
					style={{
						top: '0px',
						left: startPadding + sliderStopsOnXAxis[i] + 'px',
					}}
				>
					<div
						style={{
							width: '1px',
							height: '19px',
							background: 'white',
						}}
					></div>
					<div className='text-xs text-gray-200'>{stop.label}</div>
				</div>
			))}

			{/* SLIDER THUMB */}
			<div
				// className='absolute top-[3px] cursor-pointer rounded-full bg-white'
				className='absolute top-[10%] cursor-pointer rounded-full bg-white'
				style={{
					height: sliderThumbHeight + 'px',
					width: silderThumbWidth + 'px',
					left: startPadding + coveredWidth - silderThumbWidth / 2 + 'px',
				}}
			></div>
		</div>
	)
}

export default DiscreteSlider
