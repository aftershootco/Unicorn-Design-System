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
	onChange: (e: boolean) => void
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const onClick = useCallback(() => {
		props.onChange(!props.value)
	}, [props.onChange])

	return (
		<div className={`${styles.checkbox} ${props.value ? styles.active : ''}`} onClick={onClick}>
			{props.value && <CheckMark />}
		</div>
	)
}

CheckBox.defaultProps = {
	value: false,
	onChange: (e) => {},
}

export default React.memo(CheckBox)
