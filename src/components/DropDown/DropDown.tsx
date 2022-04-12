import React, { useState, useRef, useEffect } from 'react'
import { DownArrow } from '../../assets/svg'
import './dropDown.scss'
export interface DropDownProps {
	value: string
	data: Array<string>
	onChange: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({ value = 'INDIA', data, onChange }: DropDownProps) => {
	const [state, setState] = useState(false)
	const inputRef = useRef(null)
	const listRef = useRef(null)

	const [height, setHeight] = useState(0)

	useEffect(() => {
		let keyVal = listRef?.current?.value
		const node = listRef.current

		const keyShort = (e) => {
			if (e.key === 'ArrowDown' && listRef.current.nextSibling) {
				listRef.current.nextSibling.focus()
				keyVal = listRef.current.nextSibling.value
				console.log(keyVal, 'log22')
				listRef.current.nextSibling ? (listRef.current = listRef.current.nextSibling) : (listRef.current = node)
			} else if (e.key === 'ArrowUp' && listRef.current.previousSibling) {
				listRef.current = listRef.current.previousSibling
				listRef.current.focus()
				keyVal = listRef.current.value
			} else if (e.key === 'Enter') {
				onChange(keyVal)
				keyVal = ''
				inputRef.current.click()
				listRef.current = null
			} else if (e.key === 'Escape') {
				listRef.current = null
				setState(false)
			}
		}

		const viewportOffset = inputRef.current.getBoundingClientRect()

		setHeight(viewportOffset.top + 65)

		state &&
			listRef.current &&
			Promise.resolve().then(() => {
				document.addEventListener('keydown', keyShort)
			})

		state && listRef.current && listRef.current.focus()

		return () => {
			document.removeEventListener('keydown', keyShort)
		}
	}, [state])

	//saves values onClick on list element
	const handleChange = (e, item) => {
		e.preventDefault()
		inputRef.current.click()
		listRef.current = null
		onChange(item)
	}

	return (
		<div className='w-100 relative'>
			<div
				className='div-box cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white m-2-b'
				onClick={() => {
					setState((state) => !state)
				}}
			>
				<input value={value} className='selectInput cursor-pointer' ref={inputRef} readOnly />

				<img src={DownArrow} className={state ? 'arrowUp' : 'arrowDown'} />
			</div>

			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)}></div>}
			{state && (
				<div className='dropDown absolute w-100 br-10' style={{ maxHeight: `calc(100vh - ${height}px)` }}>
					{data.map((item, i) => {
						return i === 0 ? (
							<input
								readOnly
								ref={listRef}
								key={item}
								className='options flex-col  p-5-lr p-2-b p-2-t w-100'
								onClick={(e) => handleChange(e, item)}
								value={item}
							/>
						) : (
							<input
								readOnly
								key={item}
								className='options flex-col  p-5-lr p-2-b p-2-t w-100'
								onClick={(e) => handleChange(e, item)}
								value={item}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default DropDown
