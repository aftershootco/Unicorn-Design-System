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
				'inline-block rounded-sm border border-solid border-gray-400 p-0.5',
				props.disabled ? 'cursor-default bg-transparent' : 'cursor-pointer bg-gray-50/30',
				props.className
			)}
			onClick={onClick}
		>
			{props.value ? (
				<CheckIcon
					className={clsx(
						'h-full w-full rounded-sm transition-all duration-300',
						props.disabled ? 'bg-gray-50/30' : 'bg-blue-400 hover:bg-blue-300'
					)}
				/>
			) : (
				<div className={clsx('h-full w-full rounded-sm transition-all duration-300', !props.disabled && 'hover:bg-gray-50/30')} />
			)}
		</div>
	)
})

export default CheckBox
