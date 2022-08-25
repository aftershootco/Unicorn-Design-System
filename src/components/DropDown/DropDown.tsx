import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { classNames } from '../../utils'

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
		if (state) {
			document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })
		}
	}, [state])

	const handleChange = React.useCallback((item: string | number) => {
		props?.onChange(String(item))

		inputRef.current.click()
		firstElement.current = null
		lastElement.current = null
	}, [])

	const value = useMemo(() => {
		return Object.keys(props.data).find((key) => props.data[key] === props.value)
	}, [props.value, props.data])

	return (
		<div id='myDropDown' className='relative w-full'>
			<Listbox value={value} onChange={handleChange}>
				{({ open }) => (
					<div className='relative mt-1'>
						<Listbox.Button
							className={classNames(
								'flex items-center justify-between border-[#808080] border-[1px]',
								'px-5 pb-[9px] pt-2 pr-5 text-sm h-10 bg-transparent rounded-full w-full text-white cursor-pointer z-[2000]',
								props.className
							)}
							style={{ ...props.style }}
							onClick={() => setState((state) => !state)}
						>
							{/* <span className='block truncate'>{selected.name}</span> */}

							<div
								className={classNames(
									'flex flex-row text-sm bg-transparent rounded-lg w-full items-center justify-start text-[rgba(255,255,255,0.7)] border-none hover:brightness-150',
									'cursor-pointer whitespace-nowrap overflow-ellipsis overflow-hidden inline-block'
								)}
								ref={inputRef}
							>
								{value}
							</div>

							<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
								<ChevronDownIcon
									className={classNames(
										'h-5 w-5 text-gray-400 transition-transform',
										open ? 'rotate-180 duration-[200ms]' : 'rotate-0 duration-[300ms]'
									)}
									aria-hidden='true'
								/>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							enter='transition ease-in duration-100'
							enterFrom=' -translate-y-2 opacity-0 '
							enterTo='translate-y-0 opacity-100'
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0 translate-y-2'
						>
							<Listbox.Options
								className='absolute overflow-y-scroll mt-2 w-full bg-black rounded-lg z-[1500] border-[1px] border-[#666666]'
								style={{ maxHeight: `calc(100vh - ${height}px)`, width: props.width ? props.width : '' }}
							>
								{Object.keys(props.data).map((item, i) => {
									const objectLength = Object.keys(props.data).length
									return (
										<Listbox.Option
											value={item}
											ref={i === 0 ? firstElement : i === objectLength - 1 ? lastElement : null}
											key={item}
											id={props.value === props.data[item] ? 'apply' : item[0]}
											className={classNames(
												'flex flex-row items-center justify-start outline-none border-none text-white active:bg-[#565656] focus:bg-[#565656] hover:bg-[#626262]',
												' text-left break-words px-5 py-2 w-full cursor-pointer text-sm',
												props.value === props.data[item] ? ' bg-gray-600' : 'bg-gray-700'
											)}
										>
											{({ selected }) => (
												<>
													<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>
													{selected ? (
														<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-white'>
															<CheckIcon className='h-5 w-5 text-white' aria-hidden='true' />
														</span>
													) : null}
												</>
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
	)
}

export default React.memo(DropDown)
