import React, { useEffect, useMemo, useRef, useState } from 'react'
import './ToolTip.scss'

export interface ToolTipProps {
	children?: JSX.Element
	position?: 'Top' | 'Bottom' | 'Right' | 'Left'
	title: string
}

const ToolTip: React.FC<ToolTipProps> = (props) => {
	const [show, setShow] = useState(false)
	const hoverRef = useRef(null)
	const [cl, setCl] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			const viewportOffset = hoverRef?.current?.getBoundingClientRect()
			setCl(viewportOffset.bottom + 30)
		}, 100)
	}, [props.children])

	const showToolTip = (val) => {
		setShow(val)
	}

	const ToolTipPosition = useMemo(() => {
		switch (props.position) {
			case 'Top':
				return 'bottom-full'
			case 'Bottom':
				return 'top-full'
			case 'Right':
				return '-right-full'
			case 'Left':
				return '-left-full'
		}
	}, [props.position])

	return (
		<div
			onMouseEnter={() => showToolTip(true)}
			onMouseLeave={() => setShow(false)}
			className='relative flex flex-row items-center justify-center'
		>
			<div ref={hoverRef}>{props.children}</div>
			{show && (
				<div className={'w-30 fixed z-[1700] my-2 cursor-pointer rounded-lg bg-green-500 p-2 ' + ToolTipPosition} style={{ top: `${cl}px` }}>
					{props.title}
					<div className={`absolute inline-block align-middle arrow-${props.position} z-[100]`}></div>
				</div>
			)}
		</div>
	)
}

export default React.memo(ToolTip)
