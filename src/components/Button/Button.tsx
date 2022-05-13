import React from 'react'
import clsx from 'clsx'
import './Button.scss'

export interface ButtonProps {
	size?: 'small' | 'medium' | 'large'
	className?: string
	disabled?: boolean
	children?: string | React.ReactNode
	style?: React.CSSProperties
	variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'warning' | 'pause' | 'save' | 'save-disable' | 'disable'
	onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
	const handleClick = () => {
		props.onClick()
	}
	return (
		<button
			onClick={handleClick}
			type='button'
			className={clsx('button-' + props.variant, props.className)}
			style={props.style}
			disabled={props.disabled}
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
