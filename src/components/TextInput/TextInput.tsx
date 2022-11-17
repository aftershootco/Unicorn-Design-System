import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLDivElement> {
	/**
	 * Value of the input
	 */
	value?: any

	/**
	 * Type of the input field.
	 * @default primary
	 */
	variant?: 'primary' | 'secondary' | 'tertiary'

	/**
	 * what types of input field it will accept. Like in the case of file, what extensions will be accepted.
	 */
	accept?: string

	/**
	 * SVG icon
	 */
	suffixIcon?: JSX.Element

	/**
	 * Error in input
	 */
	error?: boolean
}

enum ErrorState {
	'active' = 'active',
	'invalid' = 'invalid',
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const inputRef = useRef<HTMLDivElement>(null)

	const [variantStyle, setClasses] = useState('active')

	const onFocus = useCallback(() => {
		if (props.error) {
			setClasses('active')
		}
	}, [props.error])

	// const onBlur = () => {
	//   if (props.error) {
	//     setClasses('invalid');
	//   }
	// };

	useEffect(() => {
		if (props.error) {
			setClasses('invalid')
		}
	}, [props.error])

	return (
		<div className='relative flex'>
			<input
				{...props}
				className={
					'relative w-full rounded-lg border bg-transparent py-2 pl-2 ' +
					(variantStyle === ErrorState.active &&
						'border-gray-50/10  text-gray-200 hover:border-gray-200 hover:text-gray-200 focus:border-green-500 focus:text-gray-50 disabled:pointer-events-none disabled:border-gray-50/30 disabled:bg-gray-50/30 disabled:text-gray-200') +
					(variantStyle === ErrorState.invalid && ' border-red-400 text-gray-50') +
					(props.readOnly ? ' cursor-default ' : '') +
					(props.suffixIcon ? ' pr-[32px]' : ' pr-2')
				}
				placeholder={props.placeholder}
				value={props.value}
				onFocus={onFocus}
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
			<div ref={inputRef} className='absolute right-0 cursor-pointer py-2 pr-2'>
				{props.suffixIcon}
			</div>
		</div>
	)
}

export default TextInput

TextInput.defaultProps = {
	suffixIcon: null,
}
