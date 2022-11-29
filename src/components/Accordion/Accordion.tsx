import { ArrowIcon } from '@aftershootco/unicorn-icons'
import React, { useRef } from 'react'

export interface AccordionProps {
	expanded?: boolean
	onChange?: () => void

	onClick?: (e: any) => void
	onClickIcon?: (e: any) => void

	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	children: JSX.Element
	bodyClassName?: string
	bodyStyle?: React.CSSProperties

	suffixIcon?: JSX.Element
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const contentSpace = useRef(null)

	const toggleAccordion = (e) => {
		e.stopPropagation()
		props.onClick(e)
	}

	return (
		<div className='w-full cursor-pointer rounded bg-gray-800 text-lg mb-2 py-3 px-4'>
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
					height: props.expanded ? 'auto' : '0px',
					opacity: props.expanded ? 1 : 0,
					transition: '300ms',
					overflow: props.expanded ? 'visible' : 'hidden',
				}}
				ref={contentSpace}
				className={`px-4 ${props.expanded ? 'my-2' : 'py-0'} w-full text-base text-gray-200 transition-height duration-300 ease-in-out ${
					props.bodyClassName
				}`}
			>
				{props.children}
			</div>
		</div>
	)
}

export default React.memo(Accordion)
