import { KeyBoardArrowRightIcon } from '@aftershootco/unicorn-icons'
import React, { useCallback, useState } from 'react'

export interface AccordionProps {
	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	body: string | JSX.Element
	bodyClassName?: string
	bodyStyle?: React.CSSProperties

	onClick?: VoidFunction
}

const Accordion: React.FC<AccordionProps> = React.forwardRef((props, ref: any) => {
	const [expanded, setExpanded] = useState(false)

	const onClick = useCallback(() => {
		setExpanded((expanded) => !expanded)
		props.onClick?.()
	}, [expanded])

	return (
		<div className='w-full cursor-pointer rounded bg-gray-800 text-lg' onClick={onClick} ref={ref}>
			<div className='flex w-full items-center p-3'>
				<KeyBoardArrowRightIcon className={`text-gray-400 transition-all ${expanded ? 'rotate-90' : 'rotate-0'}`} />
				<div className={`mx-2 text-ellipsis text-gray-50 ${props.headerClassName}`} style={props.headerStyle}>
					{props.header}
				</div>
			</div>
			{expanded && (
				<div className={`mx-9 w-full transform p-2 text-base text-gray-200 ${props.bodyClassName}`} style={props.bodyStyle}>
					{props.body}
				</div>
			)}
		</div>
	)
})

export default React.memo(Accordion)
