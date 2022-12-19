import clsx from 'clsx'
import React from 'react'
import './Switch.scss'

export interface SwitchProps {
	disabled?: boolean
	value: boolean
	className?: string
	onChange: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = React.memo((props) => {
	return (
		<div
			className={clsx(
				'flex h-9 w-16 items-center rounded-full p-1',
				props.disabled
					? props.value
						? 'pointer-events-none bg-blue-300'
						: 'pointer-events-none bg-gray-50'
					: props.value
					? 'cursor-pointer bg-blue-400'
					: 'cursor-pointer bg-gray-50'
			)}
			onClick={() => props.onChange(!props.value)}
		>
			<div
				className={clsx(
					'h-7 w-7 rounded-full  shadow-md duration-300 ease-in-out',
					props.disabled
						? props.value
							? 'translate-x-full bg-gray-50'
							: 'bg-gray-50'
						: props.value
						? 'translate-x-full bg-white'
						: 'bg-white'
				)}
			></div>
		</div>
	)
})

export default Switch
