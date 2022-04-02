import React, { useState, useRef } from 'react'
import { DownArrow } from '../../assets/svg'
import styles from './styles.module.scss'
export interface DropDownProps {
	value: string
	data: Array<string>
	onChange: (value: string) => void
	style?: React.CSSProperties
}

const DropDown: React.FC<DropDownProps> = ({ value, data, onChange, style = {} }: DropDownProps) => {
	const [state, setState] = useState(false)
	const inputRef = useRef(null)

	const handleChange = (e, item) => {
		e.preventDefault()

		inputRef.current.click()
		onChange(item)
	}

	return (
		<div className='w-100'>
			<div
				className={`${styles.divBox} cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white m-2-b`}
				onClick={() => {
					setState((state) => !state)
				}}
			>
				<input value={value} className={`${styles.selectInput} cursor-pointer`} ref={inputRef} readOnly />

				<img src={DownArrow} className={state ? `${styles.arrowUp}` : `${styles.arrowDown}`} />
			</div>

			{state && <div className={`${styles.closeOptions} cursor-pointer`} onClick={() => setState(false)}></div>}
			{state && (
				<ul className={`${styles.dropDown}`} style={style}>
					{data.map((item) => {
						return (
							<option
								key={item}
								className={`${styles.options} flex-col  p-2-l p-2-b p-2-t w-100`}
								onClick={(e) => handleChange(e, item)}
							>
								{item}
							</option>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default DropDown
