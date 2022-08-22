import React, { useCallback } from 'react'
// import styles from './styles.module.scss'

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
	onChange: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = (props) => {
	const onClick = useCallback(() => {
		props.onChange(!props.value)
	}, [props.onChange, props.value])

	return (
		<label
			// className={`${styles.switch} ${props.value ? styles.active : ''} ${props.varient === 'outlined' ? styles.outlined : ''}`}
			onClick={onClick}
			style={props.style}
		>
			{/* <span className={`${styles.round} ${styles.slider}`}></span> */}
		</label>
	)
}

export default React.memo(Switch)
