import clsx from 'clsx'
import React, { useCallback } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as CheckMark } from '../../assets/svg/CheckMark.svg'

export interface CheckBoxProps {
	defaultValue?: boolean
	onChange: (e: boolean) => void
}

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
