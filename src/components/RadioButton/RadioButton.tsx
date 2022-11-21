import React from "react";

const RadioButtons: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
	props
) => {
	return (
		<label
			className={`relative cursor-pointer text-3xl ${
				props.disabled
					? 'hover:bg-gray-50 hover:opacity-1 bg-gray-50 opacity-75'
					: 'hover:opacity-70 bg-gray-50 opacity-90'
			}`}
		>
			<input
				{...props}
				disabled={props.disabled}
				type='radio'
				checked={props.checked}
				className={`absolute cursor-pointer w-5 h-5 opacity-30`}
			/>
			<span
				className={`absolute top-px left-px w-5 h-5 bg-black opacity-70 rounded-[50%]`}
			/>
			<span
				className={`absolute top-1 left-1 h-3 w-3 rounded-[50%] ${
					props.checked && props.disabled
						? 'bg-gray-50 opacity-75'
						: 'bg-blue-400 opacity-75'
				} ${!props.checked && props.disabled && 'opacity-0'} ${
					!props.disabled && !props.checked && 'opacity-0'
				}`}
			/>
		</label>
	);
};

export default React.memo(RadioButtons);
