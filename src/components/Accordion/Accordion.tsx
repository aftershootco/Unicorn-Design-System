import React, { useCallback } from 'react'

export interface AccordionProps {
	/**
	 * @string title of the accordion
	 */
	title: string

	/**
	 * @string subtitle of the accordion
	 */
	subtitle: string

	/**
	 * @boolean set whether the accordion is open or closed
	 */
	active: boolean

	/**
	 * @function to show or close the accordion
	 */
	onChange: (value: boolean) => void
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const handleChange = useCallback(() => {
		props.onChange(!props.active)
	}, [])

	return (
		<div>
			<div onClick={handleChange}>{props.title}</div>
			{props.active && <div>{props.subtitle}</div>}
		</div>
	)
}

export default React.memo(Accordion)
