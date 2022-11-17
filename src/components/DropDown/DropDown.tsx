import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { KeyBoardArrowDownIcon } from '@aftershootco/unicorn-icons'

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

	const [selected, setSelected] = useState<any>()
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
			document.getElementById('apply')?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
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

			// const prevKeyDiv = document.getElementById(prevKey);

			// prevKeyDiv?.classList.remove('bg-red-300'); // Remove bg from the prevKey

			// If currentKey is first letter of the selected value
			if (currentKey === selectedKey) {
				selectedKeyDiv?.scrollIntoView({
					behavior: 'auto',
					block: 'start',
					inline: 'nearest',
				})
				return
			}
			currentKeyDiv?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
			// currentKeyDiv?.classList.add('hover:bg-gray-50/10');

			setPrevKey(currentKey)
		},
		[prevKey]
	)

	return (
		<div {...restProps} className='relative w-full' ref={ref}>
			<div className='flex flex-row' ref={inputRef} onClick={() => setState((state) => !state)}>
				<input
					className='relative w-full cursor-pointer rounded-lg border bg-transparent py-2 pl-2 pr-[32px] text-base-bold text-gray-200'
					value={selected}
				/>
				<div className='absolute right-0 cursor-pointer py-2 pr-2'>
					<KeyBoardArrowDownIcon />
				</div>
			</div>

			{/* {The z-index must be greater than titlebar's z-index} */}
			{state && (
				<div
					className='fixed inset-0 z-[1600] flex cursor-pointer items-center justify-between bg-transparent'
					onClick={() => setState(false)}
				/>
			)}
			{/* {Drop Down for Accountdetails, Settings} */}
			{state && (
				<div
					className='absolute z-[1700] mt-2 flex w-full flex-col overflow-y-scroll rounded-lg border border-gray-500 bg-gray-800 text-base-bold text-gray-50'
					style={{
						maxHeight: `calc(100vh - ${height}px)`,
					}}
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
									'word-break-all flex w-full cursor-pointer items-center justify-start border-none px-5 py-3 text-left text-gray-500 outline-none hover:bg-gray-50/10 active:bg-gray-800 ' +
									(props.value === _key && ' bg-red-300 text-blue-400')
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
