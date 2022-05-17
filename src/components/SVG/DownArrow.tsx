import React from 'react'

interface SVGProps {
	className?: string
}

const DownArrow: React.FC<SVGProps> = ({ className }: SVGProps) => {
	return (
		<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
			<path d='M11 1L6 6L1 1' stroke='#999999' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default DownArrow
