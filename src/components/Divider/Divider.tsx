import React from 'react'
import './Divider.scss'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	varient?: 'horizontal' | 'vertical'
}

const Divider: React.FC<DividerProps> = (props) => {
	return <div className={(props.varient && props.varient === 'vertical' ? 'vertical ' : 'horizontal ') + props.className} style={props.style} />
}

export default React.memo(Divider)
