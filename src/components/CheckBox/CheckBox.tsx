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

	className?: string
	iconClassName?: string
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<div
			className={
				'asCheck align-center relative cursor-pointer flex-col justify-center bg-transparent ' +
				(props.value ? 'as-checked ' : 'as-unchecked ') +
				props.className
			}
			onClick={onClick}
		>
			{props.value && <Check className={props.iconClassName} />}
		</div>
	)
}

export default React.memo(CheckBox)
