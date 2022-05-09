import React, { useState, memo } from 'react'

import styles from './styles.module.scss'
import { EyeOff, EyeOn } from '../../assets/svg'

export interface TextInputProps {
	type?: 'text' | 'password'
	placeholder: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
	disable?: boolean
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, type = 'text', onChange, value, disable = false }) => {
	const [showPassword, setShowPassword] = useState(type === 'password')
	return (
		<>
			<input
				type={showPassword ? 'text' : type}
				className={styles.inputBox}
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange(e)}
				disabled={disable}
			/>
			{type === 'password' && (
				<div className='cursor-pointer' onClick={() => setShowPassword((state) => !state)}>
					{!showPassword ? <img className='w-5 h-5' src={EyeOn} /> : <img className='w-5 h-5' src={EyeOff} />}
				</div>
			)}
		</>
	)
}

export default memo(TextInput)
