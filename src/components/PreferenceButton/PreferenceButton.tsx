import React, { Children } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
export interface PreferenceButtonProps {
	children?: string | React.ReactNode
	className?: string
	variant: string
	onClick: () => void
}

const PreferenceButton: React.FC<PreferenceButtonProps> = ({ children, className, onClick, variant }: PreferenceButtonProps) => {
	function handleClick() {
		onClick()
	}
	return (
		<button
			className={`text-h5 color-white cursor-pointer p-1-tb p-5-lr m-4-r br-10 ${clsx('preferenceButton-' + variant, className)}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

export default PreferenceButton
