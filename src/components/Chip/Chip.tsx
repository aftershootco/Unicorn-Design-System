import React from 'react'
import clsx from 'clsx'
import './Chip.scss'
export interface ChipProps {
	children?: string | React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary' | 'tertiary'
	onClick: () => void
	style?: React.CSSProperties
}

const Chip: React.FC<ChipProps> = (props) => {
	return (
		<button
			className={'text-h5 color-white cursor-pointer br-10 ' + clsx('prefer-' + props.variant, props.className)}
			onClick={props.onClick}
			style={props.style}
		>
			{props.children}
		</button>
	)
}

export default React.memo(Chip)
