import React from 'react'
import './Toggle.scss'

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

const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
	return (
		<div className='relative flex-row rounded-lgg border border-gray-50/10 ' style={{ width: '240px' }}>
			<button style={{ width: '120px' }} className='rounded-lgg bg-transparent duration-100 ' onClick={() => props.onClick(true)}>
				{props.options.first}
			</button>
			<button
				style={{ marginLeft: '112px', width: '120px' }}
				className='absolute cursor-pointer rounded-lgg bg-transparent text-gray-50 duration-100'
				onClick={() => props.onClick(false)}
			>
				{props.options.second}
			</button>

			<button
				className={
					' color-white absolute z-10 rounded-lgg text-base-bold text-gray-50 duration-100' +
					(!props.value ? ' translate-x-1/2  bg-blue-400' : '')
				}
				style={{ width: '120px' }}
			>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
}

export default React.memo(Toggle)
