import React from 'react'
import './Button.scss'

export interface ButtonProps {
	size?: string
	className?: string
	disabled?: boolean
	children?: string | React.ReactNode
	style?: React.CSSProperties
	variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'warning'
	onClick: (e: MouseEvent) => void
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			type='button'
			className={`button-${props.variant} ${props.className}`}
			style={props.style}
		>
			{props.children}
		</button>
	)
}

Button.defaultProps = {
	variant: 'primary',
	disabled: false,
	size: 'medium',
	style: {},
	onClick: () => {},
}

export default Button
