import clsx from 'clsx'
import React from 'react'
import './LinearProgressBar.scss'

export interface LinearProgressBarProps {
	/**
	 * id for the progress bar
	 */
	id?: string

	/**
	 * Set the value to change between determinant and indeterminant, 0 for indeterminant
	 */
	value?: number | string

	/**
	 * Variant for linearprogressbar
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Classes to be applied to the progress bar.
	 */
	className?: string

	/**
	 * Set custom styles
	 */
	style?: React.CSSProperties

	/**
	 * Background color of progress bar
	 */
	backgroundColor?: string

	/**
	 * Color of progress bar
	 */
	progressBarColor?: string
	/**
	 * changes the inner subline(!)
	 */
	innerClassName?: string
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ variant = 'primary', ...props }) => {
	console.log('vibhor: ', props.value)
	return (
		<>
			{props.value > 0 ? (
				<div id={props.id} className={clsx('relative h-2 w-full overflow-x-hidden rounded-xl', props.className)}>
					<div className='absolute h-full w-full rounded rounded-2xl bg-gray-50/10' style={{ background: `${props.backgroundColor}` }} />
					{variant === 'primary' ? (
						<div
							className={clsx('subline absolute h-2 rounded rounded-2xl bg-blue-400', props.innerClassName)}
							style={{
								background: `${props.progressBarColor}`,
								transform: `scaleX(${Number(props.value) / 100})`,
							}}
						/>
					) : (
						<div
							className={clsx('subline secondary absolute h-2 rounded rounded-2xl', props.innerClassName)}
							style={{
								transform: `scaleX(${Number(props.value) / 100})`,
							}}
						/>
					)}
				</div>
			) : (
				<div className={clsx('relative h-2 w-full overflow-x-hidden rounded-2xl', props.className)}>
					<div className='absolute h-full w-full rounded rounded-2xl bg-gray-50/10' style={{ background: `${props.backgroundColor}` }} />
					{variant === 'primary' ? (
						<div
							className={clsx('subline inc absolute h-2 rounded rounded-2xl bg-blue-400', props.innerClassName)}
							style={{ background: `${props.progressBarColor}` }}
						/>
					) : (
						<div className={clsx('subline secondary inc absolute h-2 rounded rounded-2xl bg-blue-400', props.innerClassName)} />
					)}
					{variant === 'primary' ? (
						<div
							className={clsx('subline dec absolute h-2 rounded rounded-2xl bg-blue-400', props.innerClassName)}
							style={{ background: `${props.progressBarColor}` }}
						/>
					) : (
						<div className={clsx('subline secondary dec absolute h-2 rounded rounded-2xl bg-blue-400', props.innerClassName)} />
					)}
				</div>
			)}
		</>
	)
}

export default React.memo(LinearProgressBar)
