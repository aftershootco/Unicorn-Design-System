import React from 'react'
import styles from './styles.module.scss'

export interface PreferenceButtonProps {
	text: string
	className?: string
	onClick?: (val: number) => void
	index: number
}

const PreferenceButton: React.FC<PreferenceButtonProps> = ({ text, className, onClick, index }: PreferenceButtonProps) => {
	function handleClick() {
		onClick(index)
	}
	return (
		<button key={text} className={`text-h5 color-white cursor-pointer p-1-tb p-5-lr m-4-r br-10 ${styles[className]}`} onClick={handleClick}>
			{text}
		</button>
	)
}

export default PreferenceButton
