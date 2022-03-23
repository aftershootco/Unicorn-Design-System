import React, { useState } from 'react'

import styles from './styles.module.scss'
import { EyeOff, EyeOn } from '../../assets/svg'

export interface TextInputProps {
	type?: 'text' | 'password'
	placeholder: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, type = 'text', onChange, value }) => {
	const [showPassword, setShowPassword] = useState(type === 'password')
	return (
		<div className={styles.inputBox}>
			<input type={showPassword ? 'text' : type} className={styles.passwordField} value={value} placeholder={placeholder} onChange={onChange} />
			{type === 'password' && (
				<div className='cursor-pointer' onClick={() => setShowPassword((state) => !state)}>
					{!showPassword ? <img className='w-5 h-5' src={EyeOn} /> : <img className='w-5 h-5' src={EyeOff} />}
				</div>
			)}
		</div>
	)
}

export default TextInput
