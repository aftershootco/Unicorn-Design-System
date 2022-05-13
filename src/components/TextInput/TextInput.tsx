import React, { useState, memo } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as EyeOff } from '../../assets/svg/EyeOff.svg'
import { ReactComponent as EyeOn } from '../../assets/svg/EyeOn.svg'
export interface TextInputProps {
	type?: 'text' | 'password'
	placeholder?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: () => void
	value: string
	disable?: boolean
	variant?: 'primary' | 'secondary' | 'tertiary'
	inputProperties?: string
	adornmentStartStyle?: {}
	adornmentEndStyle?: {}
}

const TextInput: React.FC<TextInputProps> = ({
	placeholder,
	type = 'text',
	onChange,
	value,
	disable = false,
	variant = 'primary',
	onClick,
	inputProperties = '',
	adornmentStartStyle = {},
	adornmentEndStyle = {},
}) => {
	const [showPassword, setShowPassword] = useState(type === 'password')
	return (
		<>
			{(variant === 'primary' || variant === 'secondary') && (
				<div className='relative m-2-b'>
					<input
						type={showPassword ? 'text' : type}
						className={`${type === 'password' && 'relative'} ${styles.inputBox} ${inputProperties}`}
						value={value}
						placeholder={placeholder}
						onChange={variant === 'primary' ? (e) => onChange(e) : null}
						onClick={variant === 'secondary' ? () => onClick() : null}
						disabled={disable}
					/>
					{type === 'password' && (
						<div className={`${styles.adornmentEnd} cursor-pointer absolute`} onClick={() => setShowPassword((state) => !state)}>
							{!showPassword ? <EyeOn /> : <EyeOff />}
						</div>
					)}
				</div>
			)}

			{variant === 'tertiary' && (
				<div className='relative m-2-b'>
					<input
						type='text'
						className={`${styles.inputBox} ${inputProperties} relative`}
						value={value}
						placeholder={placeholder}
						onChange={(e) => onChange(e)}
						disabled={disable}
					/>

					<div className={`${styles.adornmentStart} cursor-pointer absolute`} onClick={() => setShowPassword((state) => !state)}>
						<div className='w-6 h-6 br-1000' style={adornmentStartStyle}></div>
					</div>
				</div>
			)}
		</>
	)
}

export default memo(TextInput)
