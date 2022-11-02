import React, { useCallback } from 'react'
import './Slider.scss'

export interface SliderProps {
	/**
	 * @number Set a default value for the slider
	 */
	value: number

	/**
	 * @number Minimum value the slider be stretched to
	 */
	min: number

	/**
	 * @number Maximum value the slider can be stretched to
	 */
	max: number

	/**
	 * @number Value of steps while moving the slider
	 */
	step?: number

	/**
	 * @function to change the value of the slider
	 */
	onChange: (value: number) => void
}

const Slider: React.FC<SliderProps> = (props) => {
	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(Number(event.target.value))
	}, [])

	const getBackgroundSize = () => {
		return {
			backgroundSize: `${(props.value * 100) / props.max}% 100%`,
		}
	}

	return (
		<>
			<div className='slider-container'>
				<div className='slider-track' style={{ width: props.value }}></div>
				<input className='slider-thumb' type='range' min='0' max='100' step={props.step} onChange={handleChange} value={props.value} />
			</div>
			{/* <input
				className='slider-input'
				type='range'
				defaultValue={props.value}
				onChange={handleChange}
				min={props.min}
				max={props.max}
				step={props.step}
				style={getBackgroundSize()}
			/> */}
		</>
	)
}

Slider.defaultProps = {
	step: 1,
}

export default React.memo(Slider)
