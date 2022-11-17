import React from 'react';
import './Slider.scss';

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
	props
) => {
	return (
		<>
			<div
				className={`h-[34px] w-full flex items-center justify-center rounded`}
			>
				<input
					{...props}
					disabled={props.disabled}
					className={`w-4/5 rounded-sm bg-gradient-to-b ${
						!props.disabled
							? 'from-blue-600 to-blue-600'
							: 'from-gray-1000 to-gray-1000 opacity-40'
					} bg-no-repeat bg-gray-1000 slider-input ${props.className}`}
					type='range'
					style={{
						...props.style,
						backgroundSize: ((Number(props.value) - Number(props.min)) * Number(props.max)) / (Number(props.max) - Number(props.min)) + '%',
					}}
				/>
			</div>
		</>
	);
};

export default React.memo(Slider);
