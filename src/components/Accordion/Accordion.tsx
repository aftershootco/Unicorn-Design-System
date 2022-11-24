import { KeyBoardArrowRightIcon } from '@aftershootco/unicorn-icons'
import React from 'react'

export interface AccordionProps {
	expanded?: boolean
	onChange?: (expanded: boolean) => void

	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	_children: React.ReactNode
	bodyClassName?: string
	bodyStyle?: React.CSSProperties
}

const Accordion: React.FC<AccordionProps> = React.forwardRef((props, ref: any) => {
	return (
		<div className='w-full cursor-pointer rounded bg-gray-800 text-lg' onClick={() => props.onChange(!props.expanded)} ref={ref}>
			<div className='flex w-full items-center p-3'>
				<KeyBoardArrowRightIcon className={`text-gray-400 transition-all ${props.expanded ? 'rotate-90' : 'rotate-0'}`} />
				<div className={`mx-2 text-ellipsis text-gray-50 ${props.headerClassName}`} style={props.headerStyle}>
					{props.header}
				</div>
			</div>
			{true && (
				<div className={`mx-9 w-full transform p-2 text-base text-gray-200 ${props.bodyClassName}`} style={props.bodyStyle}>
					{props._children}
				</div>
			)}
		</div>
	)
})

export default React.memo(Accordion)
