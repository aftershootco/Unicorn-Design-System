import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

export interface TabsProps {
	/**
	 * The current selected tab.
	 */
	selected: number

	/**
	 * The tabs to display.
	 */
	tabs: string[]

	/**
	 * Event when the tab is changed.
	 */
	onChange: (index: number) => void

	/**
	 * The class name to apply to the tabs.
	 */
	className?: string
}

const Tabs: React.FC<TabsProps> = React.memo((props) => {
	const { onChange, tabs, className, selected } = props
	const [activeTabIndex, setActiveTabIndex] = useState(selected ?? 0)
	const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
	const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

	const tabsRef = useRef([])

	useEffect(() => {
		function setTabPosition() {
			const currentTab = tabsRef.current[activeTabIndex]
			setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
			setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
		}

		setTabPosition()
		window.addEventListener('resize', setTabPosition)

		return () => window.removeEventListener('resize', setTabPosition)
	}, [activeTabIndex])

	const handleChange = (index: number) => {
		setActiveTabIndex(index)
		onChange(index)
	}

	return (
		<nav className='relative w-full'>
			<div className='flex border-b border-gray-600'>
				{tabs.map((tab, index) => {
					return (
						<button
							key={index}
							ref={(element) => (tabsRef.current[index] = element)}
							className={clsx('min-w-8 justify-center p-3 text-2xl text-gray-50', className)}
							onClick={() => handleChange(index)}
						>
							{tab}
						</button>
					)
				})}
			</div>
			<span
				className='absolute bottom-0 block h-[1px] bg-gray-50 transition-all duration-200'
				style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
			/>
		</nav>
	)
})

export default Tabs
