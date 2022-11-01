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
			<span className='MuiSlider-root MuiSlider-colorPrimary MuiSlider-sizeMedium css-141zskv'>
				<span className='MuiSlider-rail css-b04pc9'></span>
				<span style={{ left: '0%', width: `${props.value} + %` }} className='MuiSlider-track css-1t2bqnt'></span>
				<span
					data-index='0'
					data-focusvisible='false'
					className='MuiSlider-thumb MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium css-19c0tnq'
					style={{ left: '74%' }}
				>
					<input
						data-index='0'
						type='range'
						min='0'
						max='100'
						step={props.step}
						onChange={handleChange}
						style={{
							border: '0px',
							clipPath: 'rect(0px, 0px, 0px, 0px)',
							height: '100%',
							margin: '-1px',
							overflow: 'hidden',
							padding: '0px',
							position: 'absolute',
							whiteSpace: 'nowrap',
							width: '100%',
							direction: 'ltr',
						}}
						value={props.value}
					/>
					<span className='MuiSlider-valueLabel css-3besu' aria-hidden='true'>
						<span className='MuiSlider-valueLabelCircle'>
							<span className='MuiSlider-valueLabelLabel'>{props.value}</span>
						</span>
					</span>
				</span>
			</span>
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
