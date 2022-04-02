import React from 'react'
export interface LabelProps {
	label: string
	className?: string
}

const Label: React.FC<LabelProps> = ({ label, className }: LabelProps) => {
	return (
		<div className='w-100'>
			<div className='flex-col ' style={{ flex: '1' }}>
				<div className={`${className}`}>{label}</div>
			</div>
		</div>
	)
}

export default Label
