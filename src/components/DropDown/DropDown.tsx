import React, { useState, useRef, useEffect } from 'react'
import './dropDown.scss'
import { ReactComponent as DownArrow } from '../../assets/svg/DownArrow.svg'
import { ReactComponent as UpArrow } from '../../assets/svg/UpArrow.svg'
import { ReactComponent as High } from '../../assets/svg/power-modes/high.svg'
import { ReactComponent as HighEnabled } from '../../assets/svg/power-modes/high-enabled.svg'
import { ReactComponent as Low } from '../../assets/svg/power-modes/low.svg'
import { ReactComponent as LowEnabled } from '../../assets/svg/power-modes/low-enabled.svg'
import { ReactComponent as Medium } from '../../assets/svg/power-modes/mid.svg'
import { ReactComponent as MediumEnabled } from '../../assets/svg/power-modes/mid-enabled.svg'
export interface DropDownProps {
	value: any
	data: any
	onChange: (value: string) => void
	styles?: React.CSSProperties
	className?: string
	variant?: string
}

const DropDown: React.FC<DropDownProps> = ({ value, data, onChange, variant = 'default' }: DropDownProps) => {
	const [state, setState] = useState(false)
	const inputRef = useRef(null)
	const firstElement = useRef(null)
	const nodeRef = useRef(null)
	const lastElement = useRef(null)

	const [height, setHeight] = useState(0)

	useEffect(() => {
		nodeRef.current = firstElement?.current

		let keyVal = firstElement?.current?.textContent

		firstElement.current && firstElement.current.focus()

		const keyShort = (e) => {
			if (e.key === 'ArrowDown') {
				firstElement.current.nextSibling
					? (firstElement.current = firstElement.current.nextSibling)
					: (firstElement.current = nodeRef.current)

				firstElement.current.focus()
				keyVal = firstElement.current.textContent
			} else if (e.key === 'ArrowUp') {
				firstElement.current.previousSibling
					? (firstElement.current = firstElement.current.previousSibling)
					: (firstElement.current = lastElement.current)

				firstElement.current.focus()
				keyVal = firstElement.current.textContent
			} else if (e.key === 'Enter') {
				onChange(keyVal)
				keyVal = ''
				inputRef.current.click()

				firstElement.current = null
				lastElement.current = null
			} else if (e.key === 'Escape') {
				keyVal = ''
				inputRef.current.click()

				firstElement.current = null
				lastElement.current = null
			}
		}

		function measureHeight() {
			const viewportOffset = inputRef.current.getBoundingClientRect()

			setHeight(viewportOffset.top + 65)
		}

		variant === 'default' && measureHeight()

		state &&
			firstElement.current &&
			Promise.resolve().then(() => {
				document.addEventListener('keydown', keyShort)
			})

		return () => {
			document.removeEventListener('keydown', keyShort)
		}
	}, [state])

	const handleChange = (e, item) => {
		e.preventDefault()
		onChange(item)

		inputRef.current.click()
		firstElement.current = null
		lastElement.current = null
	}
	const arrow = { upArrow: <UpArrow />, downArrow: <DownArrow /> }

	const PowerProfileIcons = {
		Low: <Low />,
		LowEnabled: <LowEnabled />,

		Medium: <Medium />,
		MediumEnabled: <MediumEnabled />,

		High: <High />,
		HighEnabled: <HighEnabled />,
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

					<div className={!state ? 'arrowDown' : 'arrowUp'}>{arrow.downArrow}</div>
				</div>
			)}
			{variant === 'icons' && (
				<div
					className='icons-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white'
					onClick={() => {
						setState((state) => !state)
					}}
				>
					<div className='m-2-r' style={{ width: '0.75rem', minHeight: ' 0.75rem' }}>
						{PowerProfileIcons[value.ProfileEnabled]}
					</div>
					<div className='selectInput cursor-pointer' ref={inputRef}>
						{value.profile}
					</div>

					<div className={(state ? 'arrowUp' : 'arrowDown') + ' m-2-l'} style={{ width: '0.75rem', minHeight: ' 0.75rem' }}>
						{arrow.downArrow}
					</div>
				</div>
			)}
			{/* {The z-index must be greater than titlebar's z-index} */}
			{state && <div className='closeOptions cursor-pointer' onClick={() => setState(false)}></div>}
			{/* {Drop Down for Accountdetails, Settings} */}
			{variant === 'default' && state && (
				<div className='dropDown absolute w-100 br-10' style={{ maxHeight: `calc(100vh - ${height}px)` }}>
					{Object.keys(data).map((item, i) => {
						let objectLength = Object.keys(data).length
						return (
							<button
								ref={(i === 0 ? firstElement : null) || (i === objectLength - 1 ? lastElement : null)}
								key={item}
								className={
									'options text-left word-break-all flex-row align-center justify-start p-5-lr p-2-b p-2-t w-100' +
									(value === item ? ' bg-grey700B' : ' bg-grey700')
								}
								onClick={(e) => handleChange(e, item)}
							>
								{item}
							</button>
						)
					})}
				</div>
			)}
			{/* {Drop Down for titlebar} */}
			{variant === 'icons' && state && (
				<div className='dropDownIcons absolute w-100 br-10'>
					{Object.keys(data).map((item, i) => {
						const pro = data[item]

						let objectLength = Object.keys(data).length

						return (
							<button
								className={
									'optionsIcons flex-row align-center p-2-l relative w-100' +
									(pro.profile === value.profile ? ' bg-grey1200' : ' bg-grey1000')
								}
								style={{
									fontSize: '0.875rem',
									height: '2.275rem',
									borderRadius: i === 0 ? '10px 10px 0 0' : i === objectLength - 1 ? '0 0 10px 10px' : null,
								}}
								onClick={(e) => handleChange(e, item)}
								ref={(i === 0 ? firstElement : null) || (i === objectLength - 1 ? lastElement : null)}
								key={pro.profile}
							>
								<div className='m-2-l' style={{ width: '0.75rem', minHeight: ' 0.75rem' }}>
									{pro.profile === value.profile ? PowerProfileIcons[pro.ProfileEnabled] : PowerProfileIcons[pro.profile]}
								</div>
								<div key={item} className='flex-row align-center p-5-lr p-2-b p-2-t w-100 bg-transparent color-white'>
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
