import React from 'react'

interface Props {
	className?: string
}

const KeyBoardArrowUp: React.FC<Props> = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' {...props} height='24px' viewBox='0 0 24 24' width='24px' fill='#FFFFFF'>
			<path d='M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z' />
		</svg>
	)
}

export default KeyBoardArrowUp
