import React from 'react'
export interface LabelProps {
	label: string
	className?: string
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
