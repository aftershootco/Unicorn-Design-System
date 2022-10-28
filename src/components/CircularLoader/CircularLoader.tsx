import React, { useState, useEffect } from 'react'
import './CircularLoader.scss'

export interface CircularLoaderProps {
	variant?: string
	style?: React.CSSProperties
	children?: React.ReactNode
	value?: number
}

const CircularLoaders: React.FC<CircularLoaderProps> = (props) => {
	const [circleStyle, setCicleStyle] = useState('126.920')

	useEffect(() => {
		if (props.variant === 'determinate') {
			setCicleStyle((((100 - props.value) / 100) * 126.92034).toFixed(3).toString())
		}
	}, [props.value])

	return (
		<div className='flex-col align-center justify-center'>
			<div className={props.variant === 'determinate' ? '' : 'loader' + ' relative'}>
				<svg viewBox='22 22 44 44'>
					<circle
						cx='44'
						cy='44'
						r='20'
						stroke='white'
						strokeWidth='3'
						fill='none'
						className={props.variant === 'determinate' ? '' : 'circle'}
						style={props.variant === 'determinate' ? { strokeDasharray: '126.920px', strokeDashoffset: `${circleStyle}px` } : {}}
					/>
				</svg>
			</div>
			{/* {props.children && <div className='absolute color-white'>{props.children}</div>} */}
		</div>
	)
}

export default CircularLoaders
