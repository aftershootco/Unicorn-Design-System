import React from 'react'
import './Divider.scss'

export interface DividerProps {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	varient?: 'horizontal' | 'vertical'
	/**
	 * c
	 */
	className?: string
	/**
	 * Styles to be applied.
	 */
	style?: React.CSSProperties
}

const Divider: React.FC<DividerProps> = (props) => {
	return <div className={props.varient === 'vertical' ? 'vertical ' : 'horizontal ' + props.className} style={props.style}></div>
}

export default React.memo(Divider)