import clsx from 'clsx'
import React from 'react'

const RadioButtons: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = React.memo((props) => {
	return (
		<label
			className={clsx(
				'text-3x relative cursor-pointer',
				props.disabled ? 'hover:opacity-1 bg-gray-50 opacity-75 hover:bg-gray-50' : 'bg-gray-50 opacity-90 hover:opacity-70'
			)}
		>
			<input {...props} type='radio' className='absolute h-5 w-5 cursor-pointer opacity-30' />
			<span className={'absolute top-px left-px h-5 w-5 rounded-[50%] bg-black opacity-70'} />
			<span
				className={clsx(
					'absolute top-1 left-1 h-3 w-3 rounded-[50%]',
					props.checked && props.disabled ? 'bg-gray-50 opacity-75' : 'bg-blue-400 opacity-75',
					!props.checked && 'opacity-0'
				)}
			/>
		</label>
	)
})

export default RadioButtons
