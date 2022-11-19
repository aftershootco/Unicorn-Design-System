import React, { useState } from 'react'

export interface CarouselProps {
	className?: string
	style?: React.CSSProperties
	data: string[] | JSX.Element[]
	view?: number
}

const Carousel: React.FC<CarouselProps> = React.forwardRef((props, ref: any) => {
	const [viewIndex, setViewIndex] = useState(props.view && props.view >= 0 && props.view < props.data.length ? props.view : 0)

	return (
		<div className={'flex-col w-100 ' + props.className} style={props.style}>
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
