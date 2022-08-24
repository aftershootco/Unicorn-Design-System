import React, { useCallback } from 'react'
import Check from '../../assets/Svg/Check'
import { classNames } from '../../utils'

export interface CheckBoxProps {
	/**
	 * Classes to be applied to the button
	 */
	className?: string

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
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<div
			className={classNames('relative bg-black flex-col align-center justify-center cursor-pointer w-7 h-7', props.className)}
			onClick={onClick}
		>
			{props.value && <Check className='w-6 text-black' />}
		</div>
	)
}

export default React.memo(CheckBox)
