import React, { useCallback, useRef } from 'react'

export interface TabsProps {
	tabsList: Array<string>
}

const Tabs: React.FC<TabsProps> = (props) => {
	const sliderRef = useRef(null)
	const indicator = useCallback((e) => {
		sliderRef.current.style.left = e.offsetLeft + 'px'
		sliderRef.current.style.width = e.offsetWidth + 'px'
	}, [])

	return (
		<nav className='relative flex'>
			<div className='absolute -bottom-5 h-1 rounded-lg bg-gray-50 duration-300' ref={sliderRef} style={{ left: '12px', width: '8rem' }} />
			{props.tabsList.map((item) => {
				return (
					<div
						className='relative my-0 mx-3 flex cursor-pointer justify-center text-2xl text-gray-50'
						onClick={(e) => indicator(e.target)}
						style={{ minWidth: '8rem' }}
					>
						{item}
					</div>
				)
			})}
		</nav>
	)
}

export default React.memo(Tabs)
