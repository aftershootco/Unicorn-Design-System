import React from 'react'
import './Toggle.scss'

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
			<button {...props} className='yearly cursor-pointer text-h4-bold color-white'>
				{props.options.first}
			</button>
			<button {...props} className='monthly cursor-pointer two text-h4-bold color-white'>
				{props.options.second}
			</button>

			<button className={'toggle_button text-h4-bold color-white cursor-pointer' + (!props.value ? ' toggleButton' : '')}>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
}

export default React.memo(Toggle)
