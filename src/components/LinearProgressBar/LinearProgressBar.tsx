import React from 'react'
import './LinearProgressBar.scss'

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
				<div className={`relative w-100 h-3 br-10 overflow-x-hidden ${props.className}`} style={props.style}>
					<div className={`absolute w-100 h-3 br-10 bg-43`} style={{ background: `${props.backgroundColor}` }} />
					<div
						className={`subline absolute h-3 br-10 bg-teal100`}
						style={{ background: `${props.progressBarColor}`, width: props.value + '%' }}
					/>
				</div>
			) : (
				<div className={`relative w-100 h-3 br-10 overflow-x-hidden ${props.className}`} style={props.style}>
					<div className={`absolute w-100 h-3 br-10 bg-43`} style={{ background: `${props.backgroundColor}` }} />
					<div className={`subline inc absolute h-3 br-10 bg-teal100`} style={{ background: `${props.progressBarColor}` }} />
					<div className={`subline dec absolute h-3 br-10 bg-teal100`} style={{ background: `${props.progressBarColor}` }} />
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
