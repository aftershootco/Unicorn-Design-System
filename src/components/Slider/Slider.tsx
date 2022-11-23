import clsx from 'clsx'
import React from 'react'
import './Slider.scss'

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = React.memo((props) => {
	return (
		<div className='flex h-8 w-full items-center justify-center rounded'>
			<input
				{...props}
				className={clsx(
					'h-8 w-4/5 cursor-pointer rounded-sm',
					'slider-input bg-gray-50 bg-gradient-to-b bg-no-repeat',
					!props.disabled ? 'from-blue-600 to-blue-600' : 'from-gray-50 to-gray-50 opacity-40',
					props.className
				)}
				type='range'
				style={{
					...props.style,
					backgroundSize: ((Number(props.value) - Number(props.min)) * Number(props.max)) / (Number(props.max) - Number(props.min)) + '%',
				}}
			/>
		</div>
	)
})

export default Slider
