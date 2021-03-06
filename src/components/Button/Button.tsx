import React from 'react'
import './Button.scss'

export interface ButtonProps {
	/**
	 * Size of the button. Default is 'medium'
	 */
	size?: 'small' | 'medium' | 'large'

	/**
	 * Classes to be applied to the button
	 */
	className?: string

	/**
	 * Is button disabled?
	 * @Default false
	 */
	disabled?: boolean

	/**
	 * Text of the button
	 */
	text?: string

	/**
	 * Either a button text or a react component.
	 */
	children?: React.ReactNode

	/**
	 * Style to be applied to the button.
	 */
	style?: React.CSSProperties

	/**
	 * Button varient.
	 * @Default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'pause' | 'save' | 'white-filled' | 'facebook'

	/**
	 * Function to be called when hit a button
	 */
	onClick: (e?: any) => void

	/**
	 * Type of the button.
	 */
	type?: 'button' | 'submit' | 'reset'

	/**
	 * To check which button is clicked with same onClick function.
	 */
	dataId?: string

	/**
	 * ID used to identify the button during testing.
	 */
	dataTestId?: string
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`${props.variant? `button-${props.variant}` : `button-primary`} ` + `${props.className}`}
			style={props.style}
			type={props.type || 'button'}
			data-id={props.dataId}
			data-test-id={props.dataTestId}
			disabled={props.disabled}
			onClick={props.disabled ? null : props.onClick}
		>
			{props.text || props.children}
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

export default React.memo(Button)
