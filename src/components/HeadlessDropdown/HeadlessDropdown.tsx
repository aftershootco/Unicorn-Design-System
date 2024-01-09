import { DropDownIcon } from '@aftershootco/unicorn-icons'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { Fragment, useEffect, useState } from 'react'

export interface HeadlessDropDownData {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}

export interface HeadlessDropDownProps {
	/**
	 * Current value selected of the dropdown
	 * It is the key of the dropdown object.
	 */
	value: string | number | JSX.Element | any

	/**
	 * Options to be shown when dropdown is opened.
	 * @example { 'Option 1': { label: 'Label 1', value: 'Value 1' }, 'Option 2': { label: 'Label 2', value: 'Value 2' } }
	 */
	data: {
		[key: string | number]: HeadlessDropDownData
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
	 * Heading for Input
	 */
	label?: string

	/**
	 * Prefix for button
	 * @example Sort By: [Property]
	 */
	buttonPrefix?: string

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
	onChange: (clickedOn: HeadlessDropDownData) => void

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
	placeholderData?: { [key: string | number]: HeadlessDropDownData }

	/**
	 * To regulate the placeholder button styles
	 */
	inputClassName?: string

	/**
	 * To regulate the input buttoon text styles
	 */
	inputTextClassName?: string

	/**
	 * To regulate the button prefix styles
	 */
	buttonPrefixClassname?: string

	/**
	 * To regulate the height of dropdown options.
	 * Should be valid tailwind class
	 * 'max-h-[value]'  <- format
	 */
	maxHeightClassName?: string

	/**
	 * To disable the dropdown
	 */
	disabled?: boolean

	/**
	 * Whether the dropdown should be single select or multiple
	 * by default - single
	 */
	variant?: 'single' | 'multiple'

	/**
	 * Whether to show radio button before each option
	 */
	showRadioButton?: boolean
}

const HeadlessDropDown: React.FC<HeadlessDropDownProps> = (props: HeadlessDropDownProps) => {
	const { variant = 'single' } = props
	const [selectedValue, setSelected] = useState<string | number | any | JSX.Element>()
	const [data, setData] = useState(props.data)
	// DropDown.defaultProps = {
	// 	dataTestId: 'uds-dropdown',
	// } Dont know about this logic yet.

	useEffect(() => {
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
		} else {
			setData(props.data)
		}
	}, [props.placeholderData, props.data, props.placeholder])

	useEffect(() => {
		const valueExist = Object.keys(data).find((key) => String(data[key].value) === String(props.value))

		if (valueExist) {
			setSelected(data[valueExist].label)
		} else {
			if (props.placeholderData) {
				setSelected(props.placeholderData[Object.keys(props.placeholderData)[0]].label)
				return
			}
			if (props.placeholder) setSelected(data[''].label)
		}
	}, [props.value, data, props.placeholder])

	const handleChange = (profile: HeadlessDropDownData) => {
		setSelected(profile.label)
		props.onChange(profile)
	}

	const handleMultiSelect = (e, profile: HeadlessDropDownData) => {
		e.preventDefault()
		setSelected(props.value)
		props.onChange(profile)
	}
	function isMultipleSelected(value) {
		if (variant === 'multiple') return props?.value.find((el) => el === value) ? true : false
	}

	return (
		<div className={clsx('flex w-full flex-col gap-1', props.outerClassName)}>
			{props.label && (
				<div className='text-white-1000 flex items-center justify-between px-1'>
					<span className='text-base-bold text-gray-50'>{props.label}</span>
					{props.optional && <span className='text-xs text-gray-200'>Optional</span>}
				</div>
			)}
			<div className='w-full'>
				<Listbox
					value={selectedValue}
					disabled={props.disabled}
					//  onChange={() =>{}}
				>
					{({ open }) => (
						<div className='relative mt-1 text-base'>
							<Listbox.Button
								className={clsx(
									'relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-50/10 px-3 py-2 text-left focus:outline-none',
									props.inputClassName ?? ''
								)}
							>
								{variant !== 'multiple' ? (
									<div className='flex w-full items-center gap-1'>
										{props.buttonPrefix && (
											<span className={clsx('text-base text-gray-200', props.buttonPrefixClassname ?? '')}>
												{props.buttonPrefix}
											</span>
										)}
										<span className={clsx('block truncate pr-5 text-gray-200', props.inputTextClassName ?? '')}>
											{selectedValue}
										</span>
									</div>
								) : (
									<span className='block w-full truncate pr-5 text-gray-200'>
										{props.value.length > 0 ? props.value?.join(', ') : 'Please Choose'}
									</span>
								)}
								<DropDownIcon className={`h-3 w-3 transition-all duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
							</Listbox.Button>
							{props.description && (
								<div className='mt-2 overflow-hidden text-ellipsis pl-1 text-xs text-gray-200'>{props.description}</div>
							)}
							<Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
								<Listbox.Options
									className={clsx(
										'grid-scollbar absolute z-[50] mt-2 w-full overflow-y-auto rounded-lg border border-gray-500 bg-gray-800 focus:outline-none',
										props.maxHeightClassName ?? 'max-h-60'
									)}
								>
									{Object.keys(data).map((profile, profileIdx) => {
										const isMultiSelected = isMultipleSelected(profile)
										return (
											<Listbox.Option
												key={profileIdx}
												data-test-id={`${props.dataTestId}-${profile}`}
												className={({ selected, active }) =>
													`relative cursor-pointer select-none py-3 pl-5 pr-4 
											text-gray-50 ${isMultiSelected || selected ? 'bg-blue-300/20' : ''} hover:bg-gray-50/10 ${active ? 'bg-gray-50/10' : ''} }`
												}
												value={data[profile].label}
												onClick={(e) => {
													variant !== 'multiple' ? handleChange(data[profile]) : handleMultiSelect(e, data[profile])
												}}
											>
												{({ selected }) => (
													<div className='flex items-center gap-2'>
														{props.showRadioButton && (
															<div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gray-50/30 bg-gray-50/10'>
																{selected && <div className='h-3 w-3 rounded-full bg-blue-400'></div>}
															</div>
														)}
														<span className={`block truncate ${isMultiSelected || selected ? 'font-medium' : ''}`}>
															{data[profile].label}
														</span>
														{isMultiSelected && (
															<span className={`flex items-center pl-1.5 text-white`}>
																<svg
																	className='h-5 w-5'
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 20 20'
																	fill='currentColor'
																>
																	<path
																		fillRule='evenodd'
																		d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
																		clipRule='evenodd'
																	/>
																</svg>
															</span>
														)}
													</div>
												)}
											</Listbox.Option>
										)
									})}
								</Listbox.Options>
							</Transition>
						</div>
					)}
				</Listbox>
			</div>
		</div>
	)
}
HeadlessDropDown.defaultProps = {
	dataTestId: 'uds-dropdown',
}
export default React.memo(HeadlessDropDown)
