import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import styles from './styles.module.scss'

export interface CheckboxProps {
	defaultValue?: boolean
	onChange: (e: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ defaultValue = false, onChange }) => {
	const [state, setState] = useState(defaultValue)
	const onClick = useCallback(
		() =>
			setState((state) => {
				onChange(!state)
				return !state
			}),
		[setState, onChange]
	)

	return (
		<div className={clsx(styles.checkbox, { [styles.active]: state })} onClick={onClick}>
			<span className={styles.checkmark}></span>
		</div>
	)
}

export default Checkbox
