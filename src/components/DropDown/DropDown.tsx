import React, { useState, useRef } from 'react'
import { DownArrow, UpArrow } from '../../assets/svg'
import './DropDown.scss'
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
				<input value={value} onClick={() => setState((state) => !state)} className='input-box cursor-pointer' readOnly ref={inputRef} />
				{!state ? (
					<img src={DownArrow} style={{ position: 'absolute', top: 'calc(50% - 8px)', right: '8px' }} />
				) : (
					<img src={UpArrow} style={{ position: 'absolute', top: 'calc(50% - 8px)', right: '8px' }} />
				)}
			</div>

			{state && (
				<ul className='dropDown'>
					{data.map((item) => {
						return (
							<li key={item} className='options flex-col  p-2-l p-2-b p-2-t w-100' onClick={(e) => handleChange(e, item)}>
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
