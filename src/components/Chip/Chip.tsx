import React from 'react'
import { classNames } from '../../utils'

export interface ChipProps {
	/**
	 * Text of the button.
	 */
	text?: string

	/**
	 * Inner component to be rendered inside the chip.
	 */
	children?: string | React.ReactNode

	/**
	 * Classes to be applied to the button
	 */
	className?: string

	/**
	 * Type of the chip. Default is 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'tertiary'

	/**
	 * Function to be called when hit a button
	 */
	onClick: () => void

	/**
	 * Style to be applied to the button.
	 */
	style?: React.CSSProperties
}

const Chip: React.FC<ChipProps> = (props) => {
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
