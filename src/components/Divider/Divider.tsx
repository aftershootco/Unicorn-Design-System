import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Type of Divider
	 * @default horizontal
	 */
	variant?: 'horizontal' | 'vertical'
}

const Divider: React.FC<DividerProps> = (props) => {
	return (
		<div
			{...props}
			className={'bg-gray-50/10' + (props.variant && props.variant === 'vertical' ? 'h-full w-px' : 'h-px w-full') + props.className}
		/>
	)
}

export default React.memo(Divider)
