import React from 'react'
import clsx from 'clsx'
import './prefer.scss'
export interface PreferenceButtonProps {
	children?: string | React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary' | 'tertiary'
	onClick: () => void
	style?: React.CSSProperties
}

const PreferenceButton: React.FC<PreferenceButtonProps> = (props) => {
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

export default React.memo(PreferenceButton)
