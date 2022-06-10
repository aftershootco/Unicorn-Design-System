import React, { useState, useRef, useEffect, useMemo } from 'react'
import './dropDown.scss'
import LowEnabled from '../SVG/LowEnabled'
import Low from '../SVG/Low'
import DownArrow from '../SVG/DownArrow'
import Medium from '../SVG/Medium'
import MediumEnabled from '../SVG/MediumEnabled'
import High from '../SVG/High'
import HighEnabled from '../SVG/HighEnabled'

export interface DropDownProps {
	value: any
	data: any
	className?: string
	styles?: React.CSSProperties
	variant?: string
	onChange: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = (props) => {
	const [state, setState] = useState(false)
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const nodeRef = useRef(null)
	const lastElement = useRef(null)

	const [height, setHeight] = useState(0)
	const measureHeight = React.useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()

		setHeight(viewportOffset.top + 65)
	}, [])

	useEffect(() => {
		props.variant === 'default' && measureHeight()
	}, [state])

	const handleChange = React.useCallback((e, item) => {
		e.preventDefault()
		props.onChange(item)

		inputRef.current.click()
		firstElement.current = null
		lastElement.current = null
	}, [])

	const value = useMemo(() => {
		return Object.keys(props.data).find((key) => props.data[key] === props.value)
	}, [props.value, props.data])

	const PowerProfileIcons = useMemo(() => {
		return {
			Low: <Low className='w-4 h-4' />,
			LowEnabled: <LowEnabled className='w-4 h-4' />,

			Medium: <Medium className='w-4 h-4' />,
			MediumEnabled: <MediumEnabled className='w-4 h-4' />,

			High: <High className='w-4 h-4' />,
			HighEnabled: <HighEnabled className='w-4 h-4' />,
		}
	}, [])

	return (
		<div className='w-100 relative'>
			{props.variant === 'default' && (
				<div
					className={'default-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white m-2-b ' + props.className}
					onClick={() => setState((state) => !state)}
				>
					<div className='selectInput cursor-pointer' ref={inputRef}>
						{value}
					</div>
					<div className={state ? 'arrowUp' : 'arrowDown'}>
						<DownArrow />
					</div>
				</div>
			)}
			{props.variant === 'icons' && (
				<div
					className='icons-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white'
					onClick={() => setState((state) => !state)}
				>
					<div className='flex-row align-center justify-center m-2-r w-4 h-4'>{PowerProfileIcons[props.value.ProfileEnabled]}</div>

					<div className='selectInput cursor-pointer' ref={inputRef}>
						{props.value.profile}
					</div>

					<div className={(state ? 'arrowUp' : 'arrowDown') + ' m-5-l w-3 h-3'}>
						<DownArrow />
					</div>
				</div>
			)}
			{/* {The z-index must be greater than titlebar's z-index} */}
			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)}></div>}
			{/* {Drop Down for Accountdetails, Settings} */}
			{props.variant === 'default' && state && (
				<div className='dropDown absolute w-100 br-10' style={{ maxHeight: `calc(100vh - ${height}px)` }}>
					{Object.keys(props.data).map((item, i) => {
						let objectLength = Object.keys(props.data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={item}
								className={
									'options text-left word-break-all flex-row align-center justify-start p-5-lr w-100 cursor-pointer ' +
									(props.value === props.data[item] ? 'bg-grey700B' : 'bg-grey700')
								}
								onClick={(e) => handleChange(e, props.data[item])}
							>
								{item}
							</button>
						)
					})}
				</div>
			)}
			{/* {Drop Down for titlebar} */}
			{props.variant === 'icons' && state && (
				<div className='dropDownIcons absolute w-100 br-10'>
					{Object.keys(props.data).map((item, i) => {
						const pro = props.data[item]

						let objectLength = Object.keys(props.data).length

						return (
							<button
								className={
									'optionsIcons flex-row align-center p-2-l relative w-100' +
									(pro.profile === props.value.profile ? ' bg-grey1200' : ' bg-grey1000')
								}
								style={{
									fontSize: '0.875rem',
									height: '2.275rem',
									borderRadius: i === 0 ? '10px 10px 0 0' : i === objectLength - 1 ? '0 0 10px 10px' : null,
								}}
								onClick={(e) => handleChange(e, item)}
								ref={(i === 0 ? firstElement : null) || (i === objectLength - 1 ? lastElement : null)}
								key={pro.profile}
							>
								<div className='m-2-l' style={{ width: '0.75rem', minHeight: ' 0.75rem' }}>
									{pro.profile === props.value.profile ? PowerProfileIcons[pro.ProfileEnabled] : PowerProfileIcons[pro.profile]}
								</div>
								<div key={item} className='flex-row align-center p-2-l p-5-r p-2-b p-2-t w-100 bg-transparent color-white'>
									{pro.profile}
								</div>
							</button>
						)
					})}
				</div>
			)}{' '}
		</div>
	)
}

export default React.memo(DropDown)
