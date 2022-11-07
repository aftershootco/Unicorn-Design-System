import React from 'react'
import styles from './styles.module.scss'

export interface SwitchProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
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
}

const Switch: React.FC<SwitchProps> = (props) => {
	return (
		<label
			{...props}
			className={`${styles.switch} ${props.value ? styles.active : ''} ${props.varient === 'outlined' ? styles.outlined : ''}`}
			style={props.style}
		>
			<span className={`${styles.round} ${styles.slider}`}></span>
		</label>
	)
}

export default React.memo(Switch)
