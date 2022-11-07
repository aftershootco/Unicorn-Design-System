import React from 'react'
import './Chip.scss'

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Type of the chip. Default is 'primary'
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Background color of the btn.
	 */
	backgroundColor?: string

	/**
	 * Text of the button.
	 */
	text?: string
}

const Chip: React.FC<ChipProps> = (props) => {
	return (
		<button
			{...props}
			className={
				'text-h5 color-white cursor-pointer ' +
				`prefer-${props.variant ? props.variant : 'primary'} ${props.className} ` +
				`disabled-${props.disabled} `
			}
			style={{ background: `${props.backgroundColor}`, border: `1px solid ${props.backgroundColor}`, ...props.style }}
			onClick={!props.disabled && props.onClick}
		>
			{props.text || props.children}
		</button>
	)
}

export default React.memo(Chip)
