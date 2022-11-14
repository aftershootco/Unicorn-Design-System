import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import DownArrow from '../SVG/DownArrow'
import './dropDown.scss'

interface DropdownData {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}

export interface DropDownProps {
	/**
	 * Current value selected of the dropdown
	 * It is the key of the dropdown object.
	 */
	value: string | number

	/**
	 * Options to be shown when dropdown is opened.
	 * @Example: { 'Option 1': 'Option 1', 'Option 2': 'Option 2' }
	 */
	data: {
		[key: string | number]: DropdownData
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
	onChange: (clickedOn: DropdownData) => void

	/**
	 * ID for Playwright testing.
	 */
	dataTestId?: string

	/**
	 * Children element.
	 */
	children?: JSX.Element

	/**
	 * To be shown when none is selected.
	 */
	placeholder?: string

	/**
	 * Place holder element
	 */
	placeholderData?: { [key: string | number]: DropdownData }
}

const DropDown: React.FC<DropDownProps> = React.forwardRef((props: DropDownProps, ref: any) => {
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const lastElement = useRef(null)

	const [state, setState] = useState(false)
	const [height, setHeight] = useState(0)
	const [prevKey, setPrevKey] = useState('')

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

	const [selected, setSelected] = useState<string | JSX.Element>()
	const [data, setData] = useState<typeof props.data>(props.data)

	// To make sure dropdown not exceeds the page.
	const measureHeight = useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()
		setHeight(viewportOffset.top + 65)
	}, [])

	// To use updated data.
	useEffect(() => {
		setTimeout(() => {
			if (props.placeholderData !== undefined) {
				setData({
					...props.placeholderData,
					...props.data,
				})
			} else if (props.placeholder !== undefined) {
				setData({
					'': { label: props.placeholder, value: '' },
					...props.data,
				})
			} else setData(props.data)
		}, 10)
	}, [props.data])

	// To update the "props.value" in case "props.data" changes.
	useEffect(() => {
		setTimeout(() => {
			const valueExist = Object.keys(data).find((key) => String(key) == String(props.value))
			if (valueExist) setSelected(data[valueExist].label)
			else {
				// show placeholder.
				if (props.placeholderData) {
					setSelected(props.placeholderData[Object.keys(props.placeholderData)[0]].label)
					return
				}
				if (props.placeholder) setSelected(data[''].label)
				else setSelected('')
			}
		}, 10)
	}, [props.value, data])

	// To get the selected value into view when dropdown clicked.
	useEffect(() => {
		measureHeight()
		if (state) {
			document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' })
			document.getElementById('apply')?.focus()
		}
	}, [state])

	// To handle onChange.
	const handleChange = React.useCallback(
		(e, clickedOn: DropdownData) => {
			e.preventDefault()
			props.onChange(clickedOn)

			inputRef.current.click()
			firstElement.current = null
			lastElement.current = null
		},
		[props.onChange]
	)

	// Key Down event for searching values with keys.
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
					{selected}
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
					{Object.keys(data).map((_key, i) => {
						let objectLength = Object.keys(data).length
						return (
							<button
								ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
								key={_key}
								id={props.value == _key ? 'apply' : data[_key].label[0]}
								className={
									'flex-row align-center justify-start options text-left word-break-all p-5-lr p-3-tb w-100 cursor-pointer ' +
									(props.value === _key ? 'bg-grey700B' : 'bg-grey700')
								}
								onClick={(e) => handleChange(e, data[_key])}
								data-test-id={`${props.dataTestId}-${_key}`}
							>
								{data[_key].label}
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
