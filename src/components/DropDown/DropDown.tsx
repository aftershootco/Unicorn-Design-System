import React, { useState, useRef } from 'react'
import { DownArrow, UpArrow } from '../../assets/svg'
import styles from './styles.module.scss'
export interface DropDownProps {
	value: string
	data: Array<string>
	onChange: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({ value, data, onChange }: DropDownProps) => {
	const [state, setState] = useState(false)

	const inputRef = useRef(null)

	const handleChange = (e, item) => {
		e.preventDefault()
		inputRef.current.click()
		onChange(item)
	}

	function handle(event) {
		event.preventDefault()
		setState((state) => !state)
	}

	return (
		<div className='relative'>
			<div className='relative'>
				<input value={value} onClick={() => setState((state) => !state)} className={styles.inputBox} readOnly ref={inputRef} />
				{!state ? (
					<img src={DownArrow} style={{ position: 'absolute', top: 'calc(50% - 8px)', right: '8px' }} />
				) : (
					<img src={UpArrow} style={{ position: 'absolute', top: 'calc(50% - 8px)', right: '8px' }} />
				)}
			</div>

			{state && (
				<ul className={styles.dropDown}>
					{data.map((item) => {
						return (
							<li key={item} className={styles.options} onClick={(e) => handleChange(e, item)}>
								{item}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
DropDown.defaultProps = {
	value: 'India',
	data: ['India', 'Russia', 'Ukraine', 'usa', 'china'],
	onChange: () => {},
}

export default DropDown
