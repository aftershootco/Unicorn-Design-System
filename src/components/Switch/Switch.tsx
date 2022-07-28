import React, { useCallback } from 'react'
import styles from './styles.module.scss'

export interface SwitchProps {
	/**
	 * Varient type of a switch
	 * @default filled
	 */
	varient?: 'filled' | 'outlined'

	/**
	 * State of the switch
	 * @default false
	 */
	value?: boolean

	/**
	 * Style applied.
	 */
	style?: React.CSSProperties

	/**
	 * Function to be called when switch is changed
	 */
	onChange: (e: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ varient, value = false, style, onChange }) => {
	const onClick = useCallback(() => {
		onChange(!value)
	}, [onChange])
	return (
		<label
			className={`${styles.switch} ${value ? styles.active : ''} ${varient === 'outlined' ? styles.outlined : ''}`}
			onClick={onClick}
			style={style}
		>
			<span className={`${styles.round} ${styles.slider}`}></span>
		</label>
	)
}

export default React.memo(Switch)
