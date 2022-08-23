import React from 'react'
import { classNames } from '../../utils'

export interface LinearProgressBarProps {
	/**
	 * Set the value to change between determinant and indeterminant, 0 for indeterminant
	 */
	value?: number

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
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = (props) => {
	return (
		<>
			<div className={classNames('relative w-full h-3 mt-4 rounded-md overflow-x-hidden', props.className)} style={props.style}>
				<div className={classNames('absolute w-full h-3 bg-grey4343 rounded-md', `bg-[${props.backgroundColor}]`)} />
				{props.value > 0 ? (
					<div
						className={classNames('absolute h-3 bg-teal transition-[width] duration-[1500] rounded-md', `bg-[${props.progressBarColor}]`)}
						style={{ width: props.value + '%' }}
					/>
				) : (
					<>
						<div
							className={classNames(
								'absolute h-3 bg-teal transition-[width] duration-[1500ms] animate-inc rounded-md',
								`bg-[${props.progressBarColor}]`
							)}
						/>
						<div
							className={classNames(
								'absolute h-3 bg-teal transition-[width] duration-[1500ms] animate-dec rounded-md',
								`bg-[${props.progressBarColor}]`
							)}
						/>
					</>
				)}
			</div>
		</>
	)
}

LinearProgressBar.defaultProps = {
	value: 0,
	// backgroundColor: '#434343',
	progressBarColor: '#1da0bc',
}

export default React.memo(LinearProgressBar)
