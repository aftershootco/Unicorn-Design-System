import React from 'react';

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Label of the associated input.
	 */
	label: string
}

const Label: React.FC<LabelProps> = React.memo((props) => {
	return (
		<div className='flex-col' style={{ flex: '1' }}>
			<div {...props}>{props.label}</div>
			{props.children}
		</div>
	)
})

export default Label
