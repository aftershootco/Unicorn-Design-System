import React, { useState, useRef, useEffect, useMemo } from 'react'
import './dropDown.scss'
import DownArrow from '../SVG/DownArrow'

export interface DropDownProps {
	/**
	 * Current value selected of the dropdown
	 */
	value: string | number

	/**
	 * Options to be shown when dropdown is opened.
	 * @Example: { 'Option 1': 'Option 1', 'Option 2': 'Option 2' }
	 */
	data: {
		[key: string]: string | number
	}

	/**
	 * Classes to be applied to the dropdown
	 */
	className?: string

	/**
	 * Style to be applied to the dropdown.
	 */
	style?: React.CSSProperties

	/**
	 * Function to be called when any option is clicked
	 */
	onChange: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = (props) => {
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const lastElement = useRef(null)

	const [state, setState] = useState(false)
	const [height, setHeight] = useState(0)

	const measureHeight = React.useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()
		setHeight(viewportOffset.top + 65)
	}, [])

	useEffect(() => {
		measureHeight()
		if (state) document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })
	}, [state])

	const handleChange = React.useCallback((e, item: string | number) => {
		e.preventDefault()
		props.onChange(String(item))

		inputRef.current.click()
		firstElement.current = null
		lastElement.current = null
	}, [])

	const value = useMemo(() => {
		return Object.keys(props.data).find((key) => props.data[key] === props.value)
	}, [props.value, props.data])

	return (
		<div className='w-100 relative'>
			<div
				className={
					'default-dropDown  m-2-b p-5-lr p-2-t text-h4 bg-transparent br-100 w-100 color-off-white cursor-pointer' + props.className
				}
				style={{ paddingBottom: '9px' }}
				onClick={() => setState((state) => !state)}
			>
				<div className='selectInput cursor-pointer' ref={inputRef}>
					{value}
				</div>
				<div className={state ? 'arrowUp' : 'arrowDown'}>
					<DownArrow />
				</div>
			</div>
			{/* {The z-index must be greater than titlebar's z-index} */}
			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)} />}
			{/* {Drop Down for Accountdetails, Settings} */}
			{state && (
				<div className='dropDown absolute w-100 br-10' style={{ maxHeight: `calc(100vh - ${height}px)` }}>
					{Object.keys(props.data).map((item, i) => {
						let objectLength = Object.keys(props.data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={item}
								id={props.value === props.data[item] ? 'apply' : 'donot'}
								className={
									'flex-row align-center justify-start options text-left word-break-all p-5-lr p-3-tb w-100 cursor-pointer ' +
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
		</div>
	)
}

export default React.memo(DropDown)
