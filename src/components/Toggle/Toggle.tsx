import React from 'react'
// import './Toggle.scss'

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
	 * Function to be called when toggle is changed.
	 */
	onClick: (value: boolean) => void

	/**
	 * Options name for the toggle.
	 */
	options: {
		first: string
		second: string
	}
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
	return (
		<div className='flex-row toggler'>
			<button className='cursor-pointer yearly text-h4-bold color-white' onClick={() => props.onClick(true)}>
				{props.options.first}
			</button>
			<button className='cursor-pointer monthly two text-h4-bold color-white' onClick={() => props.onClick(false)}>
				{props.options.second}
			</button>

			<button className={'toggle_button text-h4-bold color-white cursor-pointer' + (!props.value ? ' toggleButton' : '')}>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
}

export default React.memo(Toggle)
