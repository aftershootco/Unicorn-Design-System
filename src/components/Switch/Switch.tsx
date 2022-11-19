import React from 'react';
import './Switch.scss';

const Switch:React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<label className={`relative inline-block w-11 h-7 && ${props.disabled && 'bg-blue-300 opacity-20 rounded-full'}`}>
			<input 
                {...props}
                disabled={props.disabled} 
                checked={props.checked}
                type='checkbox' 
                className={`opacity-0 w-0 h-0`} 
            />
			<span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-50/10 transition-[0.4s] before:absolute before:content-[''] before:h- before:w-6 before:left- before:bottom-1 before:bg-white before:transition-[0.4s] before:rounded-[50%] rounded-3xl switch-slider`}></span>
		</label>
	);
};

export default React.memo(Switch);
