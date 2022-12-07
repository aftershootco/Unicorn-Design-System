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
				'flex h-7 w-7 cursor-pointer justify-center bg-[#e2e2e2]/30',
				'rounded-sm border border-solid border-gray-400 bg-transparent opacity-50',
				props.value && 'hover:brightness-150',
				props.disabled && '!bg-transparent',
				props.className
			)}
			onClick={onClick}
		>
			{props.value ? (
				<img className={clsx('mt-[3px] h-5 w-5 rounded-sm bg-[#2279CE] p-1', props.disabled && 'bg-[#e2e2e2]/30')} src={Check} alt='' />
			) : (
				!props.disabled && <div className={clsx('mt-[3px] h-5 w-5 rounded-sm p-1 hover:bg-[#e2e2e2]/30')}></div>
			)}
		</div>
	)
})

export default CheckBox
