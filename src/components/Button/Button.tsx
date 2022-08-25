import React from 'react'
import { classNames } from '../../utils'

export interface ButtonProps {
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
	onClick: (e?: React.MouseEvent<HTMLElement>) => void

	/**
	 * Type of the button.
	 */
	type?: 'button' | 'submit' | 'reset'

	/**
	 * Id of the div item.
	 */
	id?: string

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
			className={classNames(
				'box-border py-2 px-6 rounded-full text-sm font-normal text-white transition-colors ease-linear duration-100 hover:cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none',
				props.variant === 'primary'
					? 'bg-teal400 border-[1px] border-teal400  hover:bg-teal500 hover:border-teal500 disabled:bg-grey400 disabled:border-grey400'
					: props.variant === 'secondary'
					? 'bg-transparent text-white border-[1px] border-offWhite rounded-full hover:bg-grey500B'
					: props.variant === 'tertiary'
					? 'bg-transparent border-[1px] border-transparent'
					: props.variant === 'alert'
					? 'bg-red200 border-[1px] border-red200 hover:bg-red100 hover:border-red100'
					: props.variant === 'pause'
					? 'bg-pink700 border-[1px] border-pink700 max-w-full hover:bg-pink800 hover:border-pink800'
					: props.variant === 'save'
					? 'bg-yellow200 max-w-full hover:bg-yellow100'
					: props.variant === 'white-filled'
					? 'text-black bg-white border-[1px] border-white hover:bg-grey200 hover:border-grey200'
					: props.variant === 'facebook'
					? 'text-white bg-blue100 hover:bg-blue200'
					: '',
				props.className
			)}
			id={props.id}
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
}

export default React.memo(Button)
