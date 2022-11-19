import React, { useMemo } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Text of the button
	 */
	text?: string

	/**
	 * Button varient.
	 * @Default 'primary'
	 */
	variant?: 'primary' | 'secondary' | 'negative' | 'outline'

	/**
	 * Icon in Button
	 */
	suffixIcon?: JSX.Element

	/**
	 * Either a button text or a react component.
	 */
	children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
	const variantStyles = useMemo(() => {
		switch (props.variant) {
			case 'primary':
				return 'bg-blue-500 border-transparent hover:bg-blue-300 disabled:bg-gray-500 '
			case 'secondary':
				return 'bg-red-400 border-transparent hover:bg-red-500 hover:border-red-100 disabled:bg-gray-500 '
			case 'negative':
				return 'bg-gray-600 border-transparent hover:bg-gray-50/30 hover:border-gray-50/30 disabled:bg-gray-50 '
			case 'outline':
				return 'text-gray-50 bg-transparent border-gray-400 hover:border-gray-200 disabled:text-gray-200 '
			default:
				return ''
		}
	}, [props.variant])

	return (
		<button
			className={
				`align-center flex ${
					props.suffixIcon ? 'justify-between' : 'justify-center'
				} w-full cursor-pointer rounded-lg border py-3 px-5 text-base-bold text-slate-100 disabled:pointer-events-none disabled:cursor-default ` +
				variantStyles
			}
			{...props}
		>
			<span>{props.text || props.children}</span> {props.suffixIcon}
		</button>
	)
}

export default React.memo(Button)
