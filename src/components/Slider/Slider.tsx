import React from 'react'
import './Slider.scss'

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<input
			{...props}
			type='range'
			style={{
				...props.style,
				backgroundSize: ((Number(props.value) - Number(props.min)) * 100) / (Number(props.max) - Number(props.min)) + '%',
			}}
		/>
	)
}

export default React.memo(Slider)
