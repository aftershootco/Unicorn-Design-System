import clsx from 'clsx'
import React, { useCallback } from 'react'
import { ReactComponent as Check } from '../../assets/svg/Check.svg'

export interface CheckBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
			className={clsx(
				'relative h-7 w-7 cursor-pointer flex-col content-center justify-center',
				'rounded-md border-2 border-solid border-gray-400 bg-transparent opacity-50',
				'hover:brightness-150',
				!props.value && 'border-2 border-solid border-gray-50 opacity-100'
			)}
			onClick={onClick}
		>
			{props.value && <Check className='w-6' />}
		</div>
	)
}

export default React.memo(CheckBox)
