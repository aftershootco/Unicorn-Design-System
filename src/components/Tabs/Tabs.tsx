import React, { useCallback, useRef } from 'react'

export interface TabsProps {
	tabs: string[]
	onChange: (index: number) => void
}

const Tabs: React.FC<TabsProps> = React.memo((props) => {
	const sliderRef = useRef(null)

	const shiftIndicator = useCallback(
		(e, index: number) => {
			sliderRef.current.style.width = e.target.offsetWidth + 'px'
			sliderRef.current.style.left = e.target.offsetLeft + 'px'
			props.onChange(index)
		},
		[props.onChange]
	)

	return (
		<nav className='relative flex'>
			<div className='absolute bottom-5 left-3 h-1 w-32 rounded-lg bg-gray-50 duration-300' ref={sliderRef} />
			{props.tabs.map((tab, index) => {
				return (
					<div
						className='relative my-0 mx-3 flex min-w-8 cursor-pointer justify-center text-2xl text-gray-50'
						onClick={(e) => shiftIndicator(e, index)}
					>
						{tab}
					</div>
				)
			})}
		</nav>
	)
})

export default Tabs
