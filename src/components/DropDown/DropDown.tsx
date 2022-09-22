import React, { useEffect, useMemo, useRef, useState } from 'react'
import DownArrow from '../SVG/DownArrow'
import './dropDown.scss'

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
	 * Width of the dropdown
	 */
	width?: string

	/**
	 * Style to be applied to the dropdown.
	 */
	style?: React.CSSProperties

	/**
	 * Function to be called when any option is clicked
	 */
	onChange: (value: string) => void

	/**
	 * ID for Playwright testing.
	 */
	dataTestId?: string
}

const DropDown: React.FC<DropDownProps> = ({ dataTestId = 'uds-dropdown', ...props }) => {
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
		if (state) {
			document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })
		}
	}, [state])

	const handleChange = React.useCallback(
		(e, item: string | number) => {
			e.preventDefault()
			props.onChange(String(item))

			inputRef.current.click()
			firstElement.current = null
			lastElement.current = null
		},
		[props.onChange]
	)

	const value = useMemo(() => {
		return Object.keys(props.data).find((key) => props.data[key] === props.value)
	}, [props.value, props.data])

	return (
		<div id='myDropDown' className='w-100 relative' data-testid={dataTestId}>
			<div
				className={'default-dropDown p-5-lr p-2-t text-h4 bg-transparent br-100 w-100 color-off-white cursor-pointer ' + props.className}
				style={{ paddingBottom: '9px', ...props.style }}
				onClick={() => setState((state) => !state)}
				data-testid='test1'
			>
				<div
					className='selectInput cursor-pointer'
					ref={inputRef}
					style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', display: 'inline-block' }}
				>
					{value}
				</div>
				<div className={state ? 'arrowUp' : 'arrowDown'}>
					<DownArrow />
				</div>
			</div>
			{/* {The z-index must be greater than titlebar's z-index} */}
			{state && <div className='closeOptions cursor-pointer' data-testid='test2' onClick={() => setState(false)} />}
			{/* {Drop Down for Accountdetails, Settings} */}
			{state && (
				<div
					className='dropDown absolute m-2-t w-100 br-10'
					style={{ maxHeight: `calc(100vh - ${height}px)`, width: props.width ? props.width : '' }}
					data-testid='test3'
				>
					{Object.keys(props.data).map((item, i) => {
						let objectLength = Object.keys(props.data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={item}
								id={props.value === props.data[item] ? 'apply' : item[0]}
								className={
									'flex-row align-center justify-start options text-left word-break-all p-5-lr p-3-tb w-100 cursor-pointer ' +
									(props.value === props.data[item] ? 'bg-grey700B' : 'bg-grey700')
								}
								onClick={(e) => handleChange(e, props.data[item])}
								data-testid={`${dataTestId}-${item}`}
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
