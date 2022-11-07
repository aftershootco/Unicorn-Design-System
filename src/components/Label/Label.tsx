import React from 'react'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Label of the associated input.
	 */
	label: string
}

const Label: React.FC<LabelProps> = (props) => {
	return (
		<div className='flex-col' style={{ flex: '1' }}>
			<div className={`${props.className}`}>{props.label}</div>
			{props.children}
		</div>
	)
}

export default React.memo(Label)
