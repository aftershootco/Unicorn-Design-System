import clsx from 'clsx'
import React, { useCallback } from 'react'
import styles from './styles.module.scss'

export interface SwitchProps {
	defaultValue?: boolean
	onChange: (e: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ defaultValue = false, onChange }) => {
	const onClick = useCallback(() => {
		onChange(!defaultValue)
	}, [onChange])

	return (
		<label className={clsx(styles.switch, { [styles.active]: defaultValue })} onClick={onClick}>
			<span className={clsx(styles.round, styles.slider)}></span>
		</label>
	)
}

export default React.memo(Switch)
