import React from 'react'
import clsx from 'clsx'
import './Chip.scss'

export interface ChipProps {
	/**
	 * Inside component of butotn. Either text or ReactNode.
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
	 * Styles to be applied to the button.
	 */
	style?: React.CSSProperties
}

/**
 * Chip component, used in culling preferences for filters.
 */
const Chip: React.FC<ChipProps> = (props) => {
	return (
		<button
			className={'text-h5 color-white cursor-pointer br-10 ' + clsx('prefer-' + props.variant, props.className)}
			onClick={props.onClick}
			style={props.style}
		>
			{props.children}
		</button>
	)
}

export default React.memo(Chip)
