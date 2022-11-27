import clsx from 'clsx'
import React from 'react'

export interface ToggleProps {
	/**
	 * Styles to be applied on the toggle.
	 */
	style?: React.CSSProperties

	/**
	 * If true, first option is selected. Otherwise the other one.
	 */
	value: boolean

	/**
	 * Options name for the toggle.
	 */
	options: {
		first: string
		second: string
	}

	/**
	 * Function to be called when toggle is changed.
	 */
	onClick: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = React.memo((props) => {
	return (
		<div className='relative w-[240px] flex-row rounded-lgg border border-gray-50/10'>
			<button className='w-[120px] rounded-lgg bg-transparent duration-100' onClick={() => props.onClick(true)}>
				{props.options.first}
			</button>
			<button
				className='absolute ml-[112px] w-[120px] cursor-pointer rounded-lgg bg-transparent text-gray-50 duration-100'
				onClick={() => props.onClick(false)}
			>
				{props.options.second}
			</button>

			<button
				className={clsx(
					' color-white absolute z-10 w-[120px] rounded-lgg text-base-bold text-gray-50 duration-100',
					!props.value && ' translate-x-1/2  bg-blue-400'
				)}
			>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
})

export default Toggle
