import React from 'react'
import { classNames } from '../../utils'

export interface ChipProps {
	/**
	 * Key of a div
	 */
	key?: number

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
	 * Classes to be applied to the button
	 */
	className?: string

	/**
	 * Style to be applied to the button.
	 */
	style?: React.CSSProperties

	/**
	 * Inner component to be rendered inside the chip.
	 */
	children?: string | React.ReactNode

	/**
	 * Function to be called when hit a button
	 */
	onClick: () => void
}

const Chip: React.FC<ChipProps> = ({ disabled = false, ...props }) => {
	return (
		<button
			className={classNames(
				'text-sm font-normal text-white hover:cursor-pointer rounded-lg p-2',
				props.variant === 'primary'
					? 'bg-teal100 border-[1px] border-solid border-teal100'
					: props.variant === 'secondary'
					? 'bg-pink700 border-[1px] border-solid border-pink700'
					: props.variant === 'tertiary'
					? 'bg-transparent border-[1px] border-solid border-grey300'
					: '',
				props.className
			)}
			onClick={props.onClick}
			style={props.style}
		>
			{props.text || props.children}
		</button>
	)
}

export default React.memo(Chip)
