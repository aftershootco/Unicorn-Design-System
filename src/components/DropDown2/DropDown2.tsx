import { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { DropDownIcon } from '@aftershootco/unicorn-icons'
import React, { useMemo } from 'react'
import clsx from 'clsx'

export interface DropdownData2 {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}

export interface DropDownProps2 {
	/**
	 * Current value selected of the dropdown
	 * It is the key of the dropdown object.
	 */
	value: string | number | JSX.Element

	/**
	 * Options to be shown when dropdown is opened.
	 * @example { 'Option 1': { label: 'Label 1', value: 'Value 1' }, 'Option 2': { label: 'Label 2', value: 'Value 2' } }
	 */
	data: {
		[key: string | number]: DropdownData2
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
	 * Heading for Input
	 */
	label?: string

	/**
	 * Description for Input.
	 */
	description?: string

	/**
	 * Whether the input is optional or not.
	 */
	optional?: boolean

	/**
	 * Function to be called when any option is clicked
	 */
	onChange: (clickedOn: DropdownData2) => void

	/**
	 * ID for Playwright testing.
	 */
	dataTestId?: string

	/**
	 * Children element.
	 */
	children?: React.ReactNode

	/**
	 * To be shown when none is selected.
	 */
	placeholder?: string

	/**
	 * Place holder element
	 */
	placeholderData?: { [key: string | number]: DropdownData2 }

	inputClassName?: string
}

const DropDown: React.FC<DropDownProps2> = (props: DropDownProps2) => {
	const inputRef = useRef(null)
	const [expanded, setExpanded] = useState(false)
	const [selected, setSelected] = useState<string | JSX.Element>()
	const [height, setHeight] = useState(0)

	const data = props.data

	const measureHeight = useCallback(() => {
		const viewportOffset = inputRef.current.getBoundingClientRect()
		setHeight(viewportOffset.top + 65)
	}, [])

	console.log('props', props)
	console.log('props.label', props.label)

	useEffect(() => {
		measureHeight()
		if (expanded) {
			document.getElementById('apply')?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
			document.getElementById('apply')?.focus()
		}
	}, [expanded])

	useEffect(() => {
		setTimeout(() => {
			const valueExist = Object.keys(data).find((key) => String(data[key].value) === String(props.value))
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

	useEffect(() => {
		measureHeight()
		if (expanded) {
			document.getElementById('apply')?.scrollIntoView({
				behavior: 'auto',
				block: 'start',
				inline: 'nearest',
			})
			document.getElementById('apply')?.focus()
		}
	}, [expanded])

	const handleChange = React.useCallback(
		(clickedOn: DropdownData2) => {
			inputRef.current.click()
			props.onChange(clickedOn)
		},
		[props.onChange]
	)

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

	return (
		<div {...restProps} className={clsx('relative w-full', props.outerClassName)}>
			{props.label && (
				<div className='text-white-1000 mb-2 flex items-center justify-between px-1'>
					<span className='text-base-bold text-gray-50'>{props.label}</span>
					{props.optional && <span className='text-xs text-gray-200'>Optional</span>}
				</div>
			)}
			<Listbox
				value={selected}
				onChange={(data) => {
					setSelected(data)
					setExpanded(false)
				}}
			>
				<div className='relative mt-1'>
					<Listbox.Button
						className={`relative	w-full cursor-pointer text-ellipsis rounded-lg border border-gray-50/10 bg-transparent py-2 pl-2 pr-8 text-left text-base-bold text-gray-50 ${
							props.inputClassName ?? ''
						}`}
						onClick={() => setExpanded((state) => !state)}
						ref={inputRef}
					>
						<span className='block truncate'>{selected}</span>
						<DropDownIcon
							className={clsx(
								'absolute right-4 top-[30%] h-4 w-4 transform-gpu cursor-pointer text-gray-400 transition duration-300',
								expanded ? 'rotate-180' : 'rotate-0'
							)}
						/>{' '}
					</Listbox.Button>

					{props.description && <div className='mt-2 overflow-hidden text-ellipsis pl-1 text-xs text-gray-200'>{props.description}</div>}

					{expanded && (
						<div
							className='fixed inset-0 z-10 flex cursor-pointer items-center justify-between bg-transparent'
							onClick={() => setExpanded(false)}
						/>
					)}

					<Listbox.Options
						className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-500 bg-gray-800 text-base-bold text-gray-50 focus:outline-none'
						style={{ maxHeight: `calc(100vh - ${height}px)` }}
					>
						{Object.keys(data).map((_key) => (
							<Listbox.Option
								key={_key}
								className={({ active }) =>
									`z-100 word-break-all active:bg-gray-800', active:bg-gray-800, relative flex w-full cursor-pointer items-center justify-start border-none px-5 py-3 text-left text-gray-50 outline-none hover:bg-gray-50/10 ${
										active ? 'bg-blue-300/20 text-blue-400' : ''
									}`
								}
								value={props.data[_key].label}
								onClick={() => handleChange(data[_key])}
							>
								{({ selected }) => (
									<>
										<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{data[_key].label}</span>
										{selected ? <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span> : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
					{/* </Transition> */}
				</div>
			</Listbox>
		</div>
	)
}

export default DropDown
