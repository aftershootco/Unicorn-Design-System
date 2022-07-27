import React, { useCallback } from 'react'
import styles from './styles.module.scss'

interface SwitchProps {
	/**
	 * Value of the switch
	 */
	value?: boolean

	/**
	 * Function to be called when switch is changed
	 */
	onChange: (e: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ value = false, onChange }) => {
	const onClick = useCallback(() => {
		onChange(!value)
	}, [onChange])

	return (
		<label className={`${styles.switch} ${value ? styles.active : ''}`} onClick={onClick}>
			<span className={`${styles.round} ${styles.slider}`}></span>
		</label>
	)
}

export default React.memo(Switch)
