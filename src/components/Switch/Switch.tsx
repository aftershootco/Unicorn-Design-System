import clsx from 'clsx'
import React from 'react'

const Switch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = React.memo((props) => {
	return (
		<label className={clsx('relative inline-block h-7 w-11', props.disabled && 'rounded-full bg-blue-300 opacity-20')}>
			<input disabled={props.disabled} checked={props.checked} type='checkbox' className='h-0 w-0 opacity-0' />
			<span
				className={clsx(
					'absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-3xl',
					'bg-gray-50/10 transition-[0.4s]',
					`before:absolute before:bottom-1 before:w-6 before:rounded-[50%] before:bg-white before:transition-[0.4s] before:content-['']`
				)}
			/>
		</label>
	)
})

export default Switch
