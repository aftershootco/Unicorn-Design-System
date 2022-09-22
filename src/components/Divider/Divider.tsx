import React from 'react'
import './Divider.scss'

export interface DividerProps {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	variant?: 'horizontal' | 'vertical'

	/**
	 * Classes to be applied.
	 */
	className?: string

	/**
	 * Styles to be applied.
	 */
	style?: React.CSSProperties
}

const Divider: React.FC<DividerProps> = (props) => {
	return <div className={(props.variant && props.variant === 'vertical' ? 'vertical ' : 'horizontal ') + props.className} style={props.style} />
}

export default React.memo(Divider)
