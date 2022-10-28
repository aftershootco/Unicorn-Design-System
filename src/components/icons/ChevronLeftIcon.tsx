import React from 'react'

interface Props {
	className?: string
	style?: React.CSSProperties
}

const ChevronLeftIcon: React.FC<Props> = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' {...props} height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z' />
		</svg>
	)
}

export default ChevronLeftIcon
