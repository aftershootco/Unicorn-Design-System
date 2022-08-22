import React from 'react'

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
			className={'text-h5 color-white cursor-pointer br-10 ' + `prefer-${props.variant} ${props.className}`}
			onClick={props.onClick}
			style={props.style}
		>
			{props.text || props.children} <span className='bg-black'>Hello</span>
		</button>
	)
}

export default React.memo(Chip)
