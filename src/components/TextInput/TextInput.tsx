import React, { useState } from 'react'
import { ReactComponent as EyeOff } from '../../assets/svg/EyeOff.svg'
import { ReactComponent as EyeOn } from '../../assets/svg/EyeOn.svg'
import styles from './styles.module.scss'

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
	style?: {}

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
						className={`${props.type === 'password' && 'relative'} ${styles.inputBox} ${props.inputProperties}`}
						value={props.value}
						placeholder={props.placeholder}
						onChange={!props.variant || props.variant === 'primary' ? props.onChange : () => {}}
						onClick={props.variant === 'secondary' ? props.onClick : () => {}}
						disabled={props.disable}
						style={props.style}
						accept={props.accept}
						data-testid='test1'
						onKeyDown={(e: any) => {
							if ((e.metaKey || (!(process.platform === 'darwin') && e.ctrlKey)) && e.key === 'a') {
								e.target.select()
							}
							if ((e.metaKey || (!(process.platform === 'darwin') && e.ctrlKey)) && e.key === 'c') {
								const selectedText = getSelection().toString()
								if (selectedText.length > 0) navigator.clipboard.writeText(selectedText)
							}
							if (e.metaKey && e.key === 'v') {
								const initialText = e.target.value
								const selectedText = getSelection().toString()
								const cursorPosiiton = e.target.selectionStart
								navigator.clipboard.readText().then((text) => {
									const finalValue = selectedText.length
										? initialText.replace(selectedText, text)
										: initialText.slice(0, cursorPosiiton) + text + initialText.slice(cursorPosiiton)
									props.onChange({
										target: {
											value: finalValue,
										},
									} as any)
								})
							}
						}}
					/>
					{props.type === 'password' && (
						<div
							className={`${styles.adornmentEnd} cursor-pointer absolute`}
							onClick={() => setShowPassword((state) => !state)}
							style={{ top: '28%', left: '91%' }}
							data-testid='test3'
						>
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
						className={`${styles.inputBox} ${props.inputProperties} relative`}
						value={props.value}
						placeholder={props.placeholder}
						onChange={props.onChange}
						disabled={props.disable}
						style={props.style}
						data-testid='test2'
					/>

					<div className={`${styles.adornmentStart} cursor-pointer absolute`} onClick={() => setShowPassword((state) => !state)}>
						<div className='w-6 h-6 br-1000' style={props.adornmentStartStyle}></div>
					</div>
				</div>
			)}
		</>
	)
}

export default React.memo(TextInput)
