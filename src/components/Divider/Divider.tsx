import React from 'react'
import { classNames } from '../../utils'

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
			className={classNames(props.varient && props.varient === 'vertical' ? 'bg-grey w-[1px] h-100' : 'bg-grey h-[1px] w-100', props.className)}
			style={props.style}
		/>
	)
}

export default React.memo(Divider)
