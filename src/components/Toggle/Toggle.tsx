import clsx from 'clsx'
import React from 'react'
import { Button } from '../'

export interface ToggleProps {
	/**
	 * Styles to be applied on the toggle.
	 */
	style?: React.CSSProperties

	/**
	 * If true, first option is selected. Otherwise the other one.
	 */
	value: boolean

	/**
	 * Options name for the toggle.
	 */
	options: {
		first: string
		second: string
	}

	/**
	 * Function to be called when toggle is changed.
	 */
	onClick: (value: boolean) => void
}

const Toggle: React.FC<ToggleProps> = React.memo((props: ToggleProps) => {
	return (
		<div className='relative flex w-64 rounded-lg border border-white/10'>
			<Button
				className='z-2 w-32 cursor-pointer rounded-lg bg-transparent py-2 text-base text-gray-50'
				variant='transparent'
				text={props.options.first}
				onClick={() => props.onClick(true)}
			/>
			<Button
				className='z-2 w-32 cursor-pointer bg-transparent py-2 text-base text-gray-50'
				variant='transparent'
				text={props.options.second}
				onClick={() => props.onClick(false)}
			/>
			<button
				className={clsx('absolute h-full w-32 cursor-pointer rounded-lg bg-blue-400 transition-all', !props.value && ' translate-x-32')}
			/>
		</div>
	)
})

export default Toggle
