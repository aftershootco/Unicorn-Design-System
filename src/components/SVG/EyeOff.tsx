import React from 'react'

interface Props {
	className?: string
}

const EyeOff: React.FC<Props> = (props) => {
	return (
		<svg width='21' height='12' viewBox='0 0 21 12' fill='none' xmlns='http://www.w3.org/2000/svg' className={props.className}>
			<path d='M1 1C4.27586 6.28236 12.6621 13.6777 20 1' stroke='white' strokeLinecap='round' />
			<rect x='4.19531' y='5' width='1' height='4' rx='0.5' transform='rotate(33.2853 4.19531 5)' fill='white' />
			<rect width='1' height='4' rx='0.5' transform='matrix(-0.835949 0.548808 0.548808 0.835949 16.8359 5)' fill='white' />
			<rect width='1' height='4' rx='0.5' transform='matrix(-1 -8.74228e-08 -8.74228e-08 1 11 7.94629)' fill='white' />
		</svg>
	)
}

export default EyeOff
