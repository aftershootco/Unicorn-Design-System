import React from 'react'

const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M11 1L6 6L1 1' stroke='#999999' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
}

export default React.memo(DownArrow)
