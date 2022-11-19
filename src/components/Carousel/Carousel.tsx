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
	data: string[] | JSX.Element[]

	/**
	 * Default view to be shown. It should be an index of data.
	 */
	view?: number
}

const Carousel: React.FC<CarouselProps> = React.forwardRef((props, ref: any) => {
	const [viewIndex, setViewIndex] = useState(props.view && props.view >= 0 && props.view < props.data.length ? props.view : 0)

	return (
		<div {...props} className={'flex-col w-100 ' + props.className} style={props.style} ref={ref}>
			{props.data[viewIndex] ?? 'Insufficient Data'}
			{props.data.length > 1 && (
				<div className='flex-row align-center justify-center m-3-t w-100'>
					{props.data.map((_, index) => {
						return (
							<div
								className={'w-3 h-3 br-50 m-2-r cursor-pointer ' + (index === viewIndex ? 'bg-white' : 'bg-43')}
								onClick={() => setViewIndex(index)}
							></div>
						)
					})}
				</div>
			)}
		</div>
	)
})

export default React.memo(Carousel)
