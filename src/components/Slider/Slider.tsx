import React from 'react';
import './Slider.scss';

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<div className={`flex h-8 w-full items-center justify-center rounded`}>
			<input
				{...props}
				disabled={props.disabled}
				className={`h-8 w-4/5 rounded-sm bg-gradient-to-b ${
					!props.disabled ? 'from-blue-600 to-blue-600' : 'from-gray-50 to-gray-50 opacity-40'
				} bg-gray-50 bg-no-repeat slider-input cursor-pointer ${props.className}`}
				type='range'
				style={{
					...props.style,
					backgroundSize: ((Number(props.value) - Number(props.min)) * Number(props.max)) / (Number(props.max) - Number(props.min)) + '%',
				}}
			/>
		</div>
	)
}

export default React.memo(Slider)
