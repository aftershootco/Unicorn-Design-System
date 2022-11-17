import React from "react";

const RadioButtons: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
	props
) => {
	return (
		<label
			className={`relative cursor-pointer text-[25px] ${
				props.disabled
					? 'hover:bg-gray-50 hover:opacity-1'
					: 'hover:opacity-70'
			} ${
				props.disabled ? 'bg-gray-50 opacity-75' : 'bg-gray-50 opacity-90'
			}`}
		>
			<input
				{...props}
				disabled={props.disabled}
				type='radio'
				checked={props.checked}
				className={`absolute cursor-pointer w-[20px] h-[20px] opacity-30`}
			/>
			<span
				className={`absolute top-[1px] left-[1px] w-[18px] h-[18px] bg-black opacity-70 rounded-[50%]`}
			/>
			<span
				className={`absolute top-1 left-1 h-[12px] w-[12px]  rounded-[50%] ${
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

export default RadioButtons;
