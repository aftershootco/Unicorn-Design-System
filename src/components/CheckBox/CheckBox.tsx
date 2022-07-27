import React, { useCallback } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as CheckMark } from '../../assets/svg/CheckMark.svg'

export interface CheckBoxProps {
	/**
	 * Value of the checkbox.
	 * @Default false
	 */
	value?: boolean

	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (value: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const onClick = useCallback(() => {
		props.onChange(!props.value)
	}, [props.onChange])

	return (
		<div
			className={
				'relative bg-transparent flex-col align-center justify-center cursor-pointer w-7 h-7 ' +
				`${styles.checkbox} ${props.value ? styles.active : styles.notActive}`
			}
			onClick={onClick}
		>
			{props.value && <CheckMark />}
		</div>
	)
}

CheckBox.defaultProps = {
	value: false,
	onChange: (e) => {},
}

export default React.memo(CheckBox)
