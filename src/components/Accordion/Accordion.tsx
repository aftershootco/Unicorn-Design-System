import React, { useCallback, useState } from 'react'
import { KeyBoardArrowRightIcon, KeyBoardArrowDownIcon } from '@aftershootco/unicorn-icons'

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	header: string | JSX.Element
	headerClassName?: string
	headerStyle?: React.CSSProperties

	body: string | JSX.Element
	bodyClassName?: string
	bodyStyle?: React.CSSProperties

	onClick?: VoidFunction
}

const Accordion: React.FC<AccordionProps> = React.forwardRef((props, ref: any) => {
	const [state, setState] = useState(false)

	const onClick = useCallback(() => {
		setState((state) => !state)
		props.onClick()
	}, [state])

	return (
		<div className='text-h3 text-bold600 relative w-full cursor-pointer rounded-md bg-[#1c1c1c]' onClick={onClick} ref={ref} {...props}>
			<div className='align-center w-100 color-white flex-row p-3'>
				<div className='align-center flex-col justify-center'>{state ? <KeyBoardArrowDownIcon /> : <KeyBoardArrowRightIcon />}</div>
				<div className={'mx-2 text-ellipsis ' + props.headerClassName} style={{ ...props.headerStyle }}>
					{props.header}
				</div>
			</div>
			{state && (
				<div className={'text-h3 mx-9 w-full transform p-2 text-white' + props.bodyClassName} style={{ ...props.bodyStyle }}>
					{props.body}
				</div>
			)}
		</div>
	)
})

Accordion.defaultProps = {
	header: 'Accordion header',
	body: 'Accordion Body',
}

export default React.memo(Accordion)
