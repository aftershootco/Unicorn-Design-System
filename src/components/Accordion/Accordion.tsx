import { ArrowIcon } from '@aftershootco/unicorn-icons'
import React, { useEffect, useRef, useState } from 'react'

export interface AccordionProps {
	expanded?: boolean
	onChange?: () => void

	onClick?: (e: any) => void
	onClickIcon?: (e: any) => void

	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	children: string | JSX.Element
	bodyClassName?: string
	bodyStyle?: React.CSSProperties

	suffixIcon?: JSX.Element
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const [height, setHeight] = useState('0')
	const contentSpace = useRef(null)

	useEffect(() => {
		setHeight(props.expanded && `${contentSpace.current.scrollHeight}`)
	}, [props.children])

	function toggleAccordion(e) {
		e.stopPropagation()
		props.onClick(e)
		setHeight(props.expanded ? '0' : `${contentSpace.current.scrollHeight}`)
	}
	return (
		<div className='mb-2 w-full cursor-pointer rounded bg-gray-800 py-3 px-4 text-lg'>
			<div className='flex w-full items-center justify-between' onClick={toggleAccordion}>
				<div className='flex items-center'>
					<ArrowIcon className={`text-gray-400 transition-all duration-300 ${props.expanded ? 'rotate-90' : 'rotate-0'}`} />
					<div className={`text-ellipsis pl-3 text-gray-50 ${props.headerClassName}`} style={props.headerStyle}>
						{props.header}
					</div>
				</div>

				<div onClick={props.onClickIcon}>{props.suffixIcon}</div>
			</div>

			<div
				style={{
					minHeight: '0px',
					height: props.expanded ? `${height}px` : '0px',
					opacity: props.expanded ? 1 : 0,
					transition: '300ms',
					overflow: props.expanded ? 'visible' : 'hidden',
				}}
				ref={contentSpace}
				className={`px-4 ${props.expanded ? 'my-2' : 'py-0'} transition-height w-full text-base text-gray-200 duration-300 ease-in-out ${
					props.bodyClassName
				}`}
			>
				{props.children}
			</div>
		</div>
	)
}

export default React.memo(Accordion)
