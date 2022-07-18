import React from 'react'

export interface LabelProps {
	/**
	 * Label of the associated input.
	 */
	label: string

	/**
	 * Classes to be applied.
	 */
	className?: string

	/**
	 * Inside text or component to be rendered.
	 */
	children?: React.ReactNode | string
}

const Label: React.FC<LabelProps> = ({ label, className = '', children }) => {
	return (
		<div className='flex-col' style={{ flex: '1' }}>
			<div className={`${className}`}>{label}</div>
			{children}
		</div>
	)
}

export default React.memo(Label)
