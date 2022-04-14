import React, { useState, useRef, useEffect } from 'react'
import { PowerProfileIcons, DownArrow } from '../../assets/svg'
import './dropDown.scss'
export interface DropDownProps {
	value: any
	data: any
	onChange: (value: string) => void
	styles?: React.CSSProperties
	className?: string
	variant?: string
}

const DropDown: React.FC<DropDownProps> = ({ value, data, onChange, variant }: DropDownProps) => {
	const [state, setState] = useState(false)
	const inputRef = useRef(null)
	const listRef = useRef(null)
	const nodeRef = useRef(null)

	const [height, setHeight] = useState(0)

	useEffect(() => {
		nodeRef.current = listRef?.current

		let keyVal = listRef?.current?.textContent

		listRef.current && listRef.current.focus()

		const keyShort = (e) => {
			if (e.key === 'ArrowDown' && listRef.current.nextSibling) {
				listRef.current.nextSibling.focus()
				keyVal = listRef.current.nextSibling.textContent

				listRef.current.nextSibling ? (listRef.current = listRef.current.nextSibling) : (listRef.current = nodeRef.current)
			} else if (e.key === 'ArrowUp' && listRef.current.previousSibling) {
				listRef.current = listRef.current.previousSibling
				listRef.current.focus()
				keyVal = listRef.current.textContent
			} else if (e.key === 'Enter') {
				onChange(keyVal)
				keyVal = ''
				inputRef.current.click()
				listRef.current = null
			}
		}

		function measureHeight() {
			const viewportOffset = inputRef.current.getBoundingClientRect()

			setHeight(viewportOffset.top + 65)
		}

		variant === 'default' && measureHeight()

		state &&
			listRef.current &&
			Promise.resolve().then(() => {
				document.addEventListener('keydown', keyShort)
			})

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
			{variant === 'default' && (
				<div
					className='default-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white m-2-b'
					onClick={() => {
						setState((state) => !state)
					}}
				>
					<div className='selectInput cursor-pointer' ref={inputRef}>
						{value}
					</div>

					<img src={DownArrow} className={state ? 'arrowUp' : 'arrowDown'} />
				</div>
			)}
			{variant === 'icons' && (
				<div
					className='icons-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white'
					onClick={() => {
						setState((state) => !state)
					}}
				>
					<img src={PowerProfileIcons[value.ProfileEnabled]} className='m-2-r' style={{ width: '0.75rem', minHeight: ' 0.75rem' }} />
					<div className='selectInput cursor-pointer' ref={inputRef}>
						{value.profile}
					</div>

					<img
						src={DownArrow}
						className={(state ? 'arrowUp' : 'arrowDown') + ' m-2-l'}
						style={{ width: '0.75rem', minHeight: ' 0.75rem' }}
					/>
				</div>
			)}
			{/* {The z-index must be greater than titlebar z-index} */}
			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)}></div>}
			{/* {Drop Down for Accountdetails, Settings} */}
			{variant === 'default' && state && (
				<div className='dropDown absolute w-100 br-10' style={{ maxHeight: `calc(100vh - ${height}px)` }}>
					{Object.keys(data).map((item, i) => {
						return (
							<button
								ref={i === 0 ? listRef : null}
								key={item}
								className='options flex-row align-center justify-start p-5-lr p-2-b p-2-t w-100'
								onClick={(e) => handleChange(e, item)}
								value={data[item]}
							>
								{data[item]}
							</button>
						)
					})}
				</div>
			)}
			{/* {Drop Down for titlebar} */}
			{variant === 'icons' && state && (
				<div className='dropDownIcons absolute w-100 br-10'>
					{Object.keys(data).map((item, i) => {
						let pro = data[item]

						return (
							<button
								className='optionsIcons flex-row align-center p-2-l br-10 relative w-100'
								style={{ fontSize: '0.875rem', height: '2.275rem' }}
								onClick={(e) => handleChange(e, item)}
								ref={i === 0 ? listRef : null}
							>
								<img
									src={pro.profile === value.profile ? PowerProfileIcons[pro.ProfileEnabled] : PowerProfileIcons[pro.profile]}
									className='m-2-l'
									style={{ width: '0.75rem', minHeight: ' 0.75rem' }}
								/>

								<div key={item} className=' flex-row align-center p-5-lr p-2-b p-2-t w-100 bg-transparent'>
									{pro.profile}
								</div>
							</button>
						)
					})}
				</div>
			)}{' '}
		</div>
	)
}

export default DropDown
