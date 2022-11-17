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
				<div className={`relative w-full h-[.75rem] rounded-xl overflow-x-hidden ${props.className}`} style={props.style}>
					<div className={`absolute w-full h-[.75rem] rounded-xl bg-gray-600`} style={{ background: `${props.backgroundColor}` }} />
					<div
						className={`transition-width absolute h-[.75rem] rounded-xl bg-[#1da0bc]`}
						style={{ background: `${props.progressBarColor}`, width: props.value + '%' }}
					/>
				</div>
			) : (
				<div className={`relative w-full h-[.75rem] rounded-xl overflow-x-hidden ${props.className}`} style={props.style}>
					<div className={`absolute w-full h-[.75rem] rounded-xl bg-[#434343]`} style={{ background: `${props.backgroundColor}` }} />
					<div className={`transition-width animate-inc absolute h-[.75rem] rounded-xl bg-[#0e505e]`} style={{ background: `${props.progressBarColor}` }} />
					<div className={`transition-width animate-dec absolute h-[.75rem] rounded-xl bg-[#0e505e]`} style={{ background: `${props.progressBarColor}` }} />
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