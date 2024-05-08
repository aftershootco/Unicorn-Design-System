import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
// import { useAppStore } from '../../Context'

export interface ScrollingComponentProps {
	/**
	 * id for the scrolling component
	 */
	id?: string

	isDrawer?: boolean
	/**
	 * Children element.
	 */
	children?: React.ReactNode

	className?: string
}
const ScrollingComponent: React.FC<ScrollingComponentProps> = (props: ScrollingComponentProps) => {
	const { isDrawer } = props
	const containerOverFlowing = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState({ left: false, right: true })
	const HORIZONTAL_SCROLL_OFFSET = 150
	// const isDrawer = useAppStore((state) => state.drawer)

	useEffect(() => {
		if (containerOverFlowing.current) {
			containerOverFlowing.current.offsetLeft
			if (containerOverFlowing.current?.scrollWidth <= containerOverFlowing.current?.clientWidth) {
				setVisible({ left: false, right: false })
			} else if (containerOverFlowing.current?.scrollWidth > containerOverFlowing.current?.clientWidth) {
				setVisible({ left: false, right: true })
			}
		}
	}, [containerOverFlowing.current, isDrawer])

	const move = (index) => {
		const refContainer = containerOverFlowing.current

		if (index === 1 && refContainer) {
			if (refContainer.scrollWidth >= refContainer.clientWidth) {
				refContainer.scrollLeft += HORIZONTAL_SCROLL_OFFSET
			}

			if (refContainer.scrollWidth - refContainer.clientWidth < refContainer.scrollLeft + 10) {
				setVisible({ left: true, right: false })
			} else if (!visible.left && refContainer.scrollLeft > 0) {
				setVisible({ ...visible, left: true })
			}
		} else if (index === -1 && refContainer) {
			if (refContainer.scrollLeft > 0) {
				refContainer.scrollLeft -= HORIZONTAL_SCROLL_OFFSET
			}

			if (refContainer.scrollLeft === 0) {
				setVisible({ right: true, left: false })
			}
		}
	}

	const onListScroll = () => {
		const refContainer = containerOverFlowing.current
		if (refContainer.scrollWidth - refContainer.clientWidth < refContainer.scrollLeft + 10) {
			setVisible({ left: true, right: false })
		} else if (!visible.left && refContainer.scrollLeft > 0) {
			setVisible({ ...visible, left: true })
		} else if (visible.left && !visible.right && refContainer.scrollLeft > 0) {
			setVisible({ ...visible, right: true })
		} else if (refContainer.scrollLeft === 0) {
			setVisible({ right: true, left: false })
		}
	}

	return (
		<div className={clsx('relative z-[3] flex w-full flex-row items-center')}>
			{visible.right && <ScrollingArrow move={1} onClick={() => move(1)} />}
			<div
				onScroll={onListScroll}
				className={clsx('relative flex flex-row flex-nowrap items-stretch overflow-x-auto overflow-y-hidden px-3', props.className)}
				ref={containerOverFlowing}
			>
				{props.children}
			</div>
			{visible.left && <ScrollingArrow move={-1} onClick={() => move(-1)} />}
		</div>
	)
}

const ScrollingArrow = (props) => {
	return (
		<div
			id={props.id}
			className={`absolute z-[3] cursor-pointer flex-col items-center justify-center rounded-full border border-gray-700 bg-gray-600 p-0.5 ${
				props.move > 0 ? 'right-0' : 'left-0 rotate-180'
			}`}
			onClick={props.onClick}
		>
			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<g clip-path='url(#clip0_1016_2119)'>
					<path d='M9 18L15 12L9 6' stroke='#ABABAB' stroke-linecap='round' stroke-linejoin='round' />
				</g>
				<defs>
					<clipPath id='clip0_1016_2119'>
						<rect width='24' height='24' fill='white' transform='translate(0 24) rotate(-90)' />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}

export default React.memo(ScrollingComponent)
