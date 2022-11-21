import React from 'react';

const Switch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<label className={`relative inline-block h-7 w-11 ${props.disabled && 'rounded-full bg-blue-300 opacity-20'}`}>
			<input disabled={props.disabled} checked={props.checked} type='checkbox' className={`h-0 w-0 opacity-0`} />
			<span
				className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-3xl bg-gray-50/10 transition-[0.4s] before:absolute before:left-1 before:bottom-1 before:h-6 before:w-6 before:rounded-[50%] before:bg-white before:transition-[0.4s] before:content-[''] switch-slider`}
			/>
		</label>
	)
}

export default React.memo(Switch)
