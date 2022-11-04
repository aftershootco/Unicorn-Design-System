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

	return (
		<input
			type='range'
			value={props.value}
			min={props.min}
			max={props.max}
			step={props.step}
			onChange={handleChange}
			style={{ backgroundSize: ((props.value - props.min) * 100) / (props.max - props.min) + '%' }}
		/>
	)
}

Slider.defaultProps = {
	step: 1,
}

export default React.memo(Slider)
