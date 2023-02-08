import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { DropDownIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'

export interface HeadlessDropdownData {
	label: string | JSX.Element
	value: string | number | boolean
	[key: string]: any
}
export interface HeadlessDropdownProps {
	value: string | number
	onChange: (clickedOn: HeadlessDropdownData) => void
	data: {
		[key: string | number]: HeadlessDropdownData
	}
}

const HeadlessDropdown: React.FC<HeadlessDropdownProps> = React.forwardRef((props: HeadlessDropdownProps, ref: any) => {
	return (
		<Listbox value={props.data[props.value.toString()]} onChange={props.onChange}>
			<div className='relative mt-1'>
				<Listbox.Button className={clsx('relative w-full cursor-pointer rounded-md border border-gray-200/50 py-2 pl-3 pr-10 text-left')}>
					{({ open }) => (
						<>
							<span className='block truncate text-base text-gray-200'>{props.data[props.value.toString()].label}</span>
							<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
								<DropDownIcon className={clsx(open && 'rotate-180')} />
							</span>
						</>
					)}
				</Listbox.Button>
				<Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
					<Listbox.Options className='absolute z-50 mt-1 w-full overflow-auto rounded-md border border-gray-600 bg-gray-800 py-px text-base focus:outline-none'>
						{Object.keys(props.data).map((categories) => (
							<Listbox.Option
								key={categories}
								className={({ active }) =>
									`relative cursor-pointer select-none py-2 px-4 text-base text-gray-50 ${active && 'bg-gray-50/10 '} ${
										props.data[categories].value === props.value &&
										'bg-blue-700/20 text-blue-500 hover:bg-gray-50/10 hover:text-gray-50'
									}`
								}
								value={props.data[categories].value}
							>
								<span>{props.data[categories].label}</span>
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
})

export default React.memo(HeadlessDropdown)
