import clsx from 'clsx'
import React, { useCallback, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { ReactComponent as CheckMark } from '../../assets/svg/CheckMark.svg'
export interface CheckBoxProps {
	defaultValue?: boolean
	onChange: (e: boolean) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ defaultValue = false, onChange }) => {
	const [state, setState] = useState(defaultValue)
	const onClick = useCallback(
		(e) => {
			setState((state) => {
				onChange(!state)
				return !state
			})
		},
		[setState, onChange]
	)

	useEffect(() => {
		setState(defaultValue)
	}, [defaultValue])

	return (
		<div className={clsx(styles.checkbox, { [styles.active]: state })} onClick={onClick}>
			{defaultValue && <CheckMark />}
		</div>
	)
}

export default CheckBox
