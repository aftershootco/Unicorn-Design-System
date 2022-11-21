import React, { useState } from 'react'

export interface CarouselProps {
	/**
	 * ClassName for the outer div.
	 */
	className?: string

	/**
	 * Styles to be aplied for the outer div.
	 */
	style?: React.CSSProperties

	/**
	 * Data to be shown. It should be an array of JSX.
	 */
	children: string[] | JSX.Element[]

	/**
	 * Default view to be shown. It should be an index of data.
	 */
	view: number

	/**
	 * Fucntion to be called on changing view.
	 */
	onChange: (index: number) => void
}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
	return (
		<div className={`flex-col w-100 ${props.className}`} style={props.style}>
			{props.children[props.view]}
			{props.children.length > 1 && (
				<div className='flex-row align-center justify-center m-3-t w-100'>
					{props.children.map((_, index) => {
						return (
							<div
								className={'w-3 h-3 br-50 m-2-r cursor-pointer ' + (index === props.view ? 'bg-white' : 'bg-43')}
								onClick={() => props.onChange(index)}
							/>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default React.memo(Carousel)
