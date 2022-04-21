import React from 'react'
export interface LabelProps {
	label: string
	className?: string
	children?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ label, className, children }: LabelProps) => {
	return (
		<div className='w-100'>
			<div className='flex-col m-4-lr' style={{ flex: '1' }}>
				<div className={`${className}`}>{label}</div>
				{children}
			</div>
		</div>
	)
}

export default Label
