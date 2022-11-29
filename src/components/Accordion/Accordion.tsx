import { ArrowIcon } from '@aftershootco/unicorn-icons'
import React, { useCallback, useRef } from 'react'

export interface AccordionProps {
	expanded?: boolean
	onChange?: (value: boolean) => void

	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties
	children: JSX.Element
	suffixIcon?: JSX.Element
	className?: string
}

const Accordion: React.FC<AccordionProps> = React.memo((props) => {
	const contentSpace = useRef(null)

	const toggleAccordion = useCallback(
		(e) => {
			e.stopPropagation()
			props.onChange(!props.expanded)
		},
		[props.onChange]
	)

	return (
		<div className='mb-2 w-full cursor-pointer rounded bg-gray-800 py-3 px-4 text-lg'>
			<div className='flex w-full items-center justify-between' onClick={toggleAccordion}>
				<div className='flex items-center'>
					<ArrowIcon className={`text-gray-400 transition-all duration-300 ${props.expanded ? 'rotate-90' : 'rotate-0'}`} />
					<div className={`text-ellipsis pl-3 text-gray-50 ${props.headerClassName}`} style={props.headerStyle}>
						{props.header}
					</div>
				</div>

				<div>{props.suffixIcon}</div>
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
				className={`px-4 ${props.expanded ? 'my-2' : 'py-0'} transition-height w-full text-base text-gray-200 duration-300 ease-in-out`}
			>
				{props.children}
			</div>
		</div>
	)
})

export default Accordion
