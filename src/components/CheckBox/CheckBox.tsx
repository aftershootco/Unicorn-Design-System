import React, { useCallback } from 'react';
import { ReactComponent as Check } from '../../assets/svg/Check.svg';

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
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<div
			className={
				'relative h-[1.75rem] w-[1.75rem] cursor-pointer flex-col content-center justify-center rounded-md border-2 border-solid border-gray-400 bg-transparent opacity-50 hover:brightness-150' +
				(!props.value && 'opacity-100 border-2 border-solid border-gray-50')
			}
			onClick={onClick}
		>
			{props.value && <Check className='w-[1.5rem]' />}
		</div>
	)
}

export default React.memo(CheckBox)
