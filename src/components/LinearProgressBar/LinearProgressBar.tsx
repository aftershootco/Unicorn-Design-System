import React from 'react'
import './LinearProgressBar.scss'

export interface LinearProgressBarProps {
	// set the value to change between determinant and indeterminant
	// 0 for indeterminant
	value?: number

	// line color
	lineBackgroundColor?: string

	// subline color
	sublineBackgroundColor?: string
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = (props) => {

	const lineStyle = {
		background: `${props.lineBackgroundColor}`,
	}

	const sublineStyle = {
		background: `${props.sublineBackgroundColor}`,
	}

	const sublineStyleDeter = {
		background: `${props.sublineBackgroundColor}`,
		width: props.value + '%',
	}

	return (
		<>
			{(props.value > 0) ? (
				<div className='slider'>
					<div className='line' style={lineStyle}></div>
					<div className='subline' style={sublineStyleDeter}></div>
				</div>
			) : (
				<div className='slider'>
					<div className='line' style={lineStyle}></div>
					<div className='subline inc' style={sublineStyle}></div>
					<div className='subline dec' style={sublineStyle}></div>
				</div>
			)}
		</>
	)
}

LinearProgressBar.defaultProps = {
	value: 0,
	lineBackgroundColor: '#434343',
	sublineBackgroundColor: '#1da0bc'
}

export default LinearProgressBar
