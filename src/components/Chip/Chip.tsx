import React from 'react'
import './Chip.scss'

export interface ChipProps {
	/**
	 * Key of a div
	 */
	key?: number

	/**
	 * Weather rthe button is clicked or not?
	 */
	selected?: boolean

	/**
	 * Is disabled?
	 */
	disabled?: boolean

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

	/**
	 * Inner component to be rendered inside the chip.
	 */
	children?: React.ReactNode

	/**
	 * Classes to be applied to the button
	 */
	className?: string

	/**
	 * Style to be applied to the button.
	 */
	style?: React.CSSProperties

	/**
	 * Function to be called when hit a button
	 */
	onClick: () => void
}

const Chip: React.FC<ChipProps> = ({ disabled = false, selected = true, ...props }) => {
	return (
		<button
			key={props.key}
			className={
				'text-h5 color-white cursor-pointer ' +
				`prefer-${props.variant} ${props.className} ` +
				`disabled-${disabled} ` +
				`selected-${selected}`
			}
			style={{ background: `${props.backgroundColor}`, border: `1px solid ${props.backgroundColor}`, ...props.style }}
			onClick={!disabled && props.onClick}
		>
			{props.text || props.children}
		</button>
	)
}

export default React.memo(Chip)
