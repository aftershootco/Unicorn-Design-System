import React from 'react';

const Slider: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
	return (
		<>
			<input {...props} type='range' className={'bg-red-900'} />
			<div className='text-red-500'>HEllo</div>
		</>
	)
}

export default React.memo(Slider)
