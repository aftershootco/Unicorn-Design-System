import React from 'react';

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
			{props.value > 0 ? (
				<div className={`relative h-3 w-full overflow-x-hidden rounded-xl ${props.className}`} style={props.style}>
					<div className={`absolute h-3 w-full rounded-xl bg-gray-50/10`} style={{ background: `${props.backgroundColor}` }} />
					<div
						className={`absolute h-3 rounded-xl bg-blue-400 transition-width`}
						style={{ background: `${props.progressBarColor}`, width: props.value + '%' }}
					/>
				</div>
			) : (
				<div className={`relative h-3 w-full overflow-x-hidden rounded-xl ${props.className}`} style={props.style}>
					<div className={`absolute h-3 w-full rounded-xl bg-gray-50/10`} style={{ background: `${props.backgroundColor}` }} />
					<div
						className={`absolute h-3 animate-inc rounded-xl bg-blue-400 transition-width`}
						style={{ background: `${props.progressBarColor}` }}
					/>
					<div
						className={`absolute h-3 animate-dec rounded-xl bg-blue-400 transition-width`}
						style={{ background: `${props.progressBarColor}` }}
					/>
				</div>
			)}
		</>
	)
}

LinearProgressBar.defaultProps = {
	value: 0,
	backgroundColor: '#434343',
	progressBarColor: '#1da0bc',
}

export default React.memo(LinearProgressBar)
