import React from 'react'
import './Toggle.scss'

interface ToggleProps {
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
		<div className='toggler flex-row'>
			<button className='yearly cursor-pointer text-h4-bold color-white' onClick={() => props.onClick(!props.value)}>
				{props.options.first}
			</button>
			<button className='monthly cursor-pointer two text-h4-bold color-white' onClick={() => props.onClick(!props.value)}>
				{props.options.second}
			</button>

			<button className={'toggle_button text-h4-bold color-white cursor-pointer' + (!props.value ? ' toggleButton' : '')}>
				{!props.value ? props.options.second : props.options.first}
			</button>
		</div>
	)
}

export default React.memo(Toggle)
