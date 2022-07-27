import React, { useCallback } from 'react'
import { ReactComponent as Check } from '../../assets/svg/Check.svg'
import './CheckBox.scss'

export interface CheckBoxProps {
	/**
	 * Value of the checkbox.
	 * @Default false
	 */
	value: boolean

	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (value: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const onClick = useCallback(() => {
		props.onChange(!props.value)
	}, [props.onChange, props.value])

	return (
		<div
			className={
				'asCheck relative bg-transparent flex-col align-center justify-center cursor-pointer w-7 h-7 ' +
				(props.value ? 'as-checked' : 'as-unchecked')
			}
			onClick={onClick}
		>
			{props.value && <Check className='w-6' />}
		</div>
	)
}

export default React.memo(CheckBox)
