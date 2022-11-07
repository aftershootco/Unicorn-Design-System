import React from 'react'
import './Button.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Text of the button
	 */
	text?: string

	/**
	 * Button varient.
	 * @Default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'pause' | 'save' | 'white-filled' | 'facebook'
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref: any) => {
	return (
		<button
			{...props}
			className={`${props.variant ? `button-${props.variant}` : `button-primary`} ` + `${props.className}`}
			ref={ref}
			onClick={props.disabled ? null : props.onClick}
		>
			{props.text || props.children}
		</button>
	)
})

Button.defaultProps = {
	variant: 'primary',
}

export default React.memo(Button)
