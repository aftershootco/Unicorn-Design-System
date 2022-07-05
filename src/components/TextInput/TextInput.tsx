import React, { useState, memo } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as EyeOff } from '../../assets/svg/EyeOff.svg'
import { ReactComponent as EyeOn } from '../../assets/svg/EyeOn.svg'
export interface TextInputProps {
	type?: 'text' | 'password'
	placeholder?: string
	className?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: () => void
	value: string
	disable?: boolean
	variant?: 'primary' | 'secondary' | 'tertiary'
	inputProperties?: string
	adornmentStartStyle?: {}
	adornmentEndStyle?: {}
	style?: {}
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const [showPassword, setShowPassword] = useState(props.type !== 'password')
	return (
		<>
			{(props.variant === 'primary' || props.variant === 'secondary') && (
				<div className={`relative ${props?.className}`}>
					<input
						type={showPassword ? 'text' : props.type}
						className={`${props.type === 'password' && 'relative'} ${styles.inputBox} ${props.inputProperties}`}
						value={props.value}
						placeholder={props.placeholder}
						onChange={props.variant === 'primary' ? (e) => props.onChange(e) : null}
						onClick={props.variant === 'secondary' ? () => props.onClick() : null}
						disabled={props.disable}
						style={props.style}
					/>
					{props.type === 'password' && (
						<div className={`${styles.adornmentEnd} cursor-pointer absolute flex-row align-center`} onClick={() => setShowPassword((state) => !state)}>
							{!showPassword ? <EyeOn /> : <EyeOff />}
						</div>
					)}
				</div>
			)}

			{props.variant === 'tertiary' && (
				<div className={`relative ${props?.className}`}>
					<input
						type='text'
						className={`${styles.inputBox} ${props.inputProperties} relative`}
						value={props.value}
						placeholder={props.placeholder}
						onChange={(e) => props.onChange(e)}
						disabled={props.disable}
						style={props.style}
					/>

					<div className={`${styles.adornmentStart} cursor-pointer absolute`} onClick={() => setShowPassword((state) => !state)}>
						<div className='w-6 h-6 br-1000' style={props.adornmentStartStyle}></div>
					</div>
				</div>
			)}
		</>
	)
}

export default (TextInput)
