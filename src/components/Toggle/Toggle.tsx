import React from 'react'
import './Toggle.scss'
export interface ToggleProps {
	style: React.CSSProperties
	value: boolean
	onClick: (value: boolean) => void
	options: {
		first: string
		second: string
	}
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
	return (
		<div className='toggler flex-row' style={props.style}>
			<button className='yearly text-h4-bold color-white cursor-pointer' onClick={() => props.onClick(true)}>
				{props.options.first}
			</button>
			<button className='monthly two text-h4-bold color-white cursor-pointer' onClick={() => props.onClick(false)}>
				{props.options.second}
			</button>

			<button className={'toggle_button text-h4-bold color-white' + (!props.value ? ' toggleButton' : '')}>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
}

export default Toggle
