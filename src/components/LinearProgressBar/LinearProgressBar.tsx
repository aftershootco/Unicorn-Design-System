import React from 'react'
import './LinearProgressBar.scss'

export interface LinearProgressBarProps {
	// variants 
	variant?: 'indeterminant' | 'determinant'

	// set the progress for progress bar
	progress?: number
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = (props) => {

	return (
		<>
			{(props.variant === 'indeterminant') ? (
				<div className='slider'>
					<div className='line'></div>
					<div className='subline inc'></div>
					<div className='subline dec'></div>
				</div>
			) : (
				<div className='slider'>
					<div className='line'></div>
					<div className='subline' style={{width: props.progress + '%'}}></div>
				</div>
			)}
		</>
	)
}

LinearProgressBar.defaultProps = {
	variant: 'indeterminant',
}

export default LinearProgressBar
