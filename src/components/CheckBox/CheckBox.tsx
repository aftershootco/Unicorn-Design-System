import clsx from 'clsx'
import React, { useCallback } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as CheckMark } from '../../assets/svg/CheckMark.svg'

export interface CheckBoxProps {
	/**
	 * default value of the checkbox. Default is false
	 */
	defaultValue?: boolean
	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (e: boolean) => void
}

/** 
 * CheckBox component.
 */
const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const onClick = useCallback(() => {
		props.onChange(!props.defaultValue)
	}, [props.onChange])

	return (
		<div className={clsx(styles.checkbox, { [styles.active]: props.defaultValue })} onClick={onClick}>
			{props.defaultValue && <CheckMark />}
		</div>
	)
}

CheckBox.defaultProps = {
	defaultValue: false,
	onChange: (e) => {},
}

export default React.memo(CheckBox)
