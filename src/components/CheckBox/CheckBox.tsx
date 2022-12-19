import { CheckIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'
import React, { useCallback } from 'react'

export interface CheckBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	/**
	 * Value of the checkbox.
	 * @Default false
	 */
	value: boolean

	/**
	 * Whether the checkbox is disabled
	 * @Default false
	 */
	disabled?: boolean

	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (value: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CheckBox: React.FC<CheckBoxProps> = React.memo((props) => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<div
			className={clsx(
				'flex cursor-pointer items-center justify-center !bg-gray-50/30',
				'rounded-sm border border-solid border-gray-400 bg-transparent opacity-50',
				props.value && 'hover:brightness-150',
				props.disabled && '!bg-transparent',
				props.className
			)}
			onClick={onClick}
		>
			{props.value ? (
				<CheckIcon className={clsx('h-3/4 w-3/4 rounded-sm bg-blue-400', props.disabled && '!bg-gray-50/30')} />
			) : (
				!props.disabled && <div className={clsx('h-3/4 w-3/4 rounded-sm hover:bg-gray-50/30')}></div>
			)}
		</div>
	)
})

export default CheckBox
