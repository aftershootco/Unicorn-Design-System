import React from 'react';

export interface DividerProps {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	varient?: 'horizontal' | 'vertical'

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
	return (
		<div
			className={'bg-gray-50/10' + (props.varient && props.varient === 'vertical' ? 'h-full w-px' : 'h-px w-full') + props.className}
			style={props.style}
		/>
	)
}

export default React.memo(Divider)
