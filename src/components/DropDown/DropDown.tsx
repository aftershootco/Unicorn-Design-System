import React, { useState } from 'react'

import './DropDown.scss'
export interface DropDownProps {
	defaultValue?: boolean
	value?: string
	data: Array<string>
	onChange?: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({ defaultValue, value, data, onChange }: DropDownProps) => {
	const handleChange = (e) => {
		e.preventDefault()

		onChange(e.target.value)
	}

	return (
		<div className='flex-row align-center justify-between cursor-pointer relative selector-field-container bg-grey700'>
			<select value={value} onChange={handleChange} className='m-2-r'>
				{data.map((item) => {
					return (
						<option key={item} className='bg-grey700'>
							{item}
						</option>
					)
				})}
			</select>
		</div>
	)
}
DropDown.defaultProps = {
	defaultValue: false,
	value: 'India',
	data: ['India', 'Russia', 'Ukraine'],
	onChange: () => {},
}

export default DropDown
