import React, { useState } from 'react'
import EyeOff from '../../assets/Svg/EyeOff'
import EyeOn from '../../assets/Svg/EyeOn'

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
	adornmentStartStyle?: React.CSSProperties

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

	return (
		<>
			{(!props.variant || props.variant === 'primary' || props.variant === 'secondary') && (
				<div className={`relative ${props?.className}`}>
					{props.prefix}
					<input
						type={!showPassword ? 'text' : props.type}
						className={`${props.type === 'password' && 'relative'} ${props.inputProperties}`}
						value={props.value}
						placeholder={props.placeholder}
						onChange={!props.variant || props.variant === 'primary' ? (e) => props.onChange(e) : void 0}
						onClick={props.variant === 'secondary' ? () => props?.onClick() : void 0}
						disabled={props.disable}
						style={props.style}
						accept={props.accept}
					/>
					{props.type === 'password' && (
						<div onClick={() => setShowPassword((state) => !state)} style={{ top: '28%', left: '91%' }}>
							{showPassword ? <EyeOn /> : <EyeOff />}
						</div>
					)}
				</div>
			)}

			{props.variant === 'tertiary' && (
				<div className={`relative ${props?.className}`}>
					{props.prefix}
					<input
						type='text'
						value={props.value}
						placeholder={props.placeholder}
						onChange={(e) => props.onChange(e)}
						disabled={props.disable}
						style={props.style}
					/>

					<div className='cursor-pointer absolute' onClick={() => setShowPassword((state) => !state)}>
						<div className='w-6 h-6 br-1000' style={props.adornmentStartStyle} />
					</div>
				</div>
			)}
		</>
	)
}

export default React.memo(TextInput)
