import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
		[key: string]: {
			title: string
			value: string | number
			[key: string]: any
		}
	}

	/**
	 * Classes to be applied to the dropdown
	 */
	className?: string

	/**
	 * Classes to be applied to the outer div of dropdown.
	 */
	outerClassName?: string

	/**
	 * Width of the dropdown
	 */
	width?: string

	/**
	 * Style to be applied to the dropdown.
	 */
	style?: React.CSSProperties

	/**
	 * Style to be applied on the outer div element
	 */
	outerStyle?: React.CSSProperties

	/**
	 * Function to be called when any option is clicked
	 */
	onChange: (value: string) => void

	/**
	 * ID for Playwright testing.
	 */
	dataTestId?: string

	/**
	 * Children element.
	 */
	children?: JSX.Element
}

const DropDown: React.FC<DropDownProps> = React.forwardRef((props: DropDownProps, ref: any) => {
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const lastElement = useRef(null)

	const [state, setState] = useState(false)
	const [height, setHeight] = useState(0)
	const [prevKey, setPrevKey] = useState('')
	const [value, setValue] = useState('')

	const restProps: any = useMemo(() => {
		const temp = { ...props }

		delete temp.value
		delete temp.data
		delete temp.className
		delete temp.outerClassName
		delete temp.style
		delete temp.outerStyle
		delete temp.width
		delete temp.onChange
		delete temp.dataTestId
		delete temp.children

		return temp
	}, [props])

	const measureHeight = React.useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()
		setHeight(viewportOffset.top + 65)
	}, [])

	useEffect(() => {
		setTimeout(() => setValue(Object.keys(props.data).find((key) => props.data[key].title === props.value)), 10)
	}, [props.value, props.data])

	useEffect(() => {
		measureHeight()
		if (state) {
			document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' })
			document.getElementById('apply')?.focus()
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

	const onKeyDown = useCallback(
		(e) => {
			if (typeof props.value === 'number') return
			const selectedKey = props.value[0]?.toUpperCase() ?? 'A'
			const selectedKeyDiv = document.getElementById('apply')

			const currentKey = e.key.toString()?.toUpperCase() ?? 'A'
			const currentKeyDiv = document.getElementById(currentKey)

			const prevKeyDiv = document.getElementById(prevKey)

			prevKeyDiv?.classList.remove('bg-grey700B') // Remove bg from the prevKey

			// If currentKey is first letter of the selected value
			if (currentKey === selectedKey) {
				selectedKeyDiv?.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' })
				return
			}
			currentKeyDiv?.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' })
			currentKeyDiv?.classList.add('bg-grey700B')
			setPrevKey(currentKey)
		},
		[prevKey]
	)

	return (
		<div
			{...restProps}
			id='myDropDown'
			className={'w-100 relative ' + props.outerClassName}
			style={{ ...props.outerStyle }}
			data-test-id={props.dataTestId}
			ref={ref}
		>
			<div
				className={'default-dropDown p-5-lr p-2-t text-h4 bg-transparent br-100 w-100 color-off-white cursor-pointer ' + props.className}
				style={{ paddingBottom: '9px', ...props.style }}
				onClick={() => setState((state) => !state)}
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
			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)} />}
			{/* {Drop Down for Accountdetails, Settings} */}
			{state && (
				<div
					className='dropDown absolute m-2-t w-100 br-10'
					style={{ maxHeight: `calc(100vh - ${height}px)`, width: props.width ? props.width : '' }}
					onKeyDown={onKeyDown}
				>
					{Object.keys(props.data).map((item, i) => {
						let objectLength = Object.keys(props.data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={item}
								id={props.value === props.data[item].title ? 'apply' : item[0]}
								className={
									'flex-row align-center justify-start options text-left word-break-all p-5-lr p-3-tb w-100 cursor-pointer ' +
									(props.value === props.data[item].value ? 'bg-grey700B' : 'bg-grey700')
								}
								onClick={(e) => handleChange(e, props.data[item].value)}
								data-test-id={`${props.dataTestId}-${item}`}
							>
								{item}
							</button>
						)
					})}
					<div onClick={() => setState(false)}>{props.children}</div>
				</div>
			)}
		</div>
	)
})

DropDown.defaultProps = {
	dataTestId: 'uds-dropdown',
}

export default React.memo(DropDown)
