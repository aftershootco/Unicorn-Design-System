import clsx from 'clsx'
import React, { useCallback } from 'react'
import styles from './styles.module.scss'

export interface SwitchProps {
	/**
	 * Default value of the switch
	 */
	defaultValue?: boolean
	/**
	 * Function to be called when switch is changed
	 */
	onChange: (e: boolean) => void
}

/**
 * Switch component. This component is used to toggle a boolean value.
 */
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
