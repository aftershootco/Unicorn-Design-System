import React from 'react'
import clsx from 'clsx'
import './Prefer.scss'
export interface PreferenceButtonProps {
	children?: string | React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary' | 'tertiary'
	onClick: () => void
	style?: React.CSSProperties
}

const PreferenceButton: React.FC<PreferenceButtonProps> = ({ children, className, onClick, variant, style = {} }: PreferenceButtonProps) => {
	function handleClick() {
		onClick()
	}
	return (
		<button className={'text-h5 color-white cursor-pointer br-10 ' + clsx('prefer-' + variant, className)} onClick={handleClick} style={style}>
			{children}
		</button>
	)
}

export default PreferenceButton
