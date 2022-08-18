import React from 'react'
import './LinearProgressBar.scss'

export interface LinearProgressBarProps {
	/**
	 * set the value to change between determinant and indeterminant, 0 for indeterminant
	 */
	value?: number

	/**
	 * background color of progress bar
	 */
	progressBarBackgroundColor?: string

	/**
	 * color of progress bar
	 */
	progressBarColor?: string
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = (props) => {
	return (
		<>
			{props.value > 0 ? (
				<div className={`slider relative w-100 m-4-t br-10 overflow-x-hidden`}>
					<div className={`line absolute w-100 br-10 bg-43`} style={{ background: `${props.progressBarBackgroundColor}` }}></div>
					<div
						className={`subline absolute br-10 bg-teal100`}
						style={{ background: `${props.progressBarColor}`, width: props.value + '%' }}
					></div>
				</div>
			) : (
				<div className={`slider relative w-100 m-4-t br-10 overflow-x-hidden`}>
					<div className={`line absolute w-100 br-10 bg-43`} style={{ background: `${props.progressBarBackgroundColor}` }}></div>
					<div className={`subline inc absolute br-10 bg-teal100`} style={{ background: `${props.progressBarColor}` }}></div>
					<div className={`subline dec absolute br-10 bg-teal100`} style={{ background: `${props.progressBarColor}` }}></div>
				</div>
			)}
		</>
	)
}

LinearProgressBar.defaultProps = {
	value: 0,
	progressBarBackgroundColor: '#434343',
	progressBarColor: '#1da0bc',
}

export default LinearProgressBar
