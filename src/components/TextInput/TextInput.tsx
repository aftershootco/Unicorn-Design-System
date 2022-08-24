import React, { useState } from 'react'
// import EyeOff from '../SVG/EyeOff'
// import EyeOn from '../SVG/EyeOn'

import { EyeIcon,EyeOffIcon } from '@heroicons/react/solid'

import { classNames } from '../../utils'

export interface TextInputProps {
	/**
	 * Type of the input
	 */
	type?: 'text' | 'password' | 'number' | 'file'

	/**
	 * Placeholder of the input
	 */
	placeholder?: string

	/**
	 * Classes to be applied to the input field.
	 */
	className?: string

	/**
	 * Event to be triggered when there is an input change
	 */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

	/**
	 * Function to be called when hit input field.
	 */
	onClick?: () => void

	/**
	 * Value of the input
	 */
	value: string

	/**
	 * Is the input disabled?
	 */
	disable?: boolean

	/**
	 * Type of the input field.
	 * @default primary
	 */
	variant?: 'primary' | 'secondary' | 'tertiary'

	/**
	 * Inner properties of the input field. Will be added in the className.
	 */
	inputProperties?: string

	/**
	 * Will be added in the style of the input field with tertiary variant.
	 */
	adornmentStartStyle?: {}

	/**
	 * Styles to be applied to the input field.
	 */
	style?: React.CSSProperties

	/**
	 * what types of input field it will accept. Like in the case of file, what extensions will be accepted.
	 */
	accept?: string

	/**
	 * Any prefix code need to be added.
	 */
	prefix?: JSX.Element
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const [showPassword, setShowPassword] = useState(props.type === 'password')
	console.log((!props.variant || props.variant === 'primary' || props.variant === 'secondary'))
	return (
		<>
			{(!props.variant || props.variant === 'primary' || props.variant === 'secondary') && (
				<div className={classNames(`relative ${props?.className}`)}>
					{props.prefix}
					<input
						type={!showPassword ? 'text' : props.type}
						className={classNames(
							`${props.type === 'password' && 'relative'}`,
							`flex items-center justify-center px-[1.25rem] font-['Lato'] font-normal leading-[150%] text-[1rem] bg-transparent rounded-[100px] w-[100%] text-offWhite h-[2.8rem] border-[1px] border-solid border-grey300`,
							`hover:text-white hover:brightness-150`,
							`active:text-white active:brightness-150`,
							`${props.inputProperties}`,
						)}
						value={props.value}
						placeholder={props.placeholder}
						onChange={!props.variant || props.variant === 'primary' ? (e) => props.onChange(e) : void 0}
						onClick={props.variant === 'secondary' ? () => props?.onClick() : void 0}
						disabled={props.disable}
						style={props.style}
						accept={props.accept}
					/>
					{props.type === 'password' && (
						<div
							className={classNames(`absolute top-[28%] left-[91%] cursor-pointer`)}
							onClick={() => setShowPassword((state) => !state)}
						>
							{showPassword ? <EyeIcon className="h-4 w-4 text-black" /> : <EyeOffIcon className='h-4 w-4 text-black' />} 
						</div>
					)}
				</div>
			)}

			{props.variant === 'tertiary' && (
				<div className={classNames(`relative ${props?.className}`)}>
					{props.prefix}
					<input
						type='text'
						className={classNames(
							`relative flex items-center justify-center px-[1.25rem] font-['Lato'] font-normal leading-[150%] text-[1rem] bg-transparent rounded-[100px] w-[100%] text-offWhite h-[2.8rem] border-[1px] border-solid border-grey300`,
							`hover:text-white hover:brightness-150`,
							`active:text-white active:brightness-150`,
							`${props.inputProperties}`,
						)}
						value={props.value}
						placeholder={props.placeholder}
						onChange={(e) => props.onChange(e)}
						disabled={props.disable}
						style={props.style}
					/>

					<div
						className={classNames(`absolute flex items-center justify-center left-[.75rem] top-[calc(50%-0.6rem)] cursor-pointer`)}
						onClick={() => setShowPassword((state) => !state)}
					>
						<div className={classNames('w-6 h-6 rounded-[1000]')} style={props.adornmentStartStyle}></div>
					</div>
				</div>
			)}
		</>
	)
}

export default React.memo(TextInput)
