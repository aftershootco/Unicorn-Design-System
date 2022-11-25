import clsx from 'clsx'
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
	variant?: 'primary' | 'secondary' | 'negative' | 'outline' | 'transparent'

	/**
	 * Icon in Button
	 */
	suffixIcon?: JSX.Element

	onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
	const variantStyles = useMemo(() => {
		switch (props.variant) {
			case 'primary':
				return 'bg-blue-400 border-blue-400 hover:bg-blue-300 hover:border-blue-300 disabled:bg-gray-500 disabled:border-gray-500 disabled:text-gray-200'
			case 'secondary':
				return 'bg-red-400 border-red-400 hover:bg-red-500 hover:border-red-500 disabled:bg-gray-50/10 disabled:border-gray-50/10'
			case 'negative':
				return 'bg-gray-600 border-gray-600 hover:bg-gray-50/30 hover:border-gray-50/30 disabled:bg-gray-50/10 disabled:border-gray-50/10'
			case 'outline':
				return 'bg-transparent border-gray-400 hover:border-gray-200'
			case 'transparent':
				return 'border-transparent'
			default:
				return ''
		}
	}, [props.variant])

	return (
		<button
			{...props}
			className={clsx(
				'align-center flex w-full cursor-pointer border text-gray-50',
				props.suffixIcon ? 'justify-between' : 'justify-center',
				'rounded-lg py-3 px-5 text-base-bold',
				'disabled:pointer-events-none disabled:cursor-default disabled:text-gray-200',
				variantStyles,
				props.className
			)}
		>
			<>{props.text || props.children}</> {props.suffixIcon}
		</button>
	)
}

export default React.memo(Button)
