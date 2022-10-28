import React from 'react'

interface Props {
	className?: string
	style?: React.CSSProperties
	onClick?: () => void
}

const ContentCopy: React.FC<Props> = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' {...props} height='24px' viewBox='0 0 24 24' width='24px' fill='#FFFFFF'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
		</svg>
	)
}

export default ContentCopy
