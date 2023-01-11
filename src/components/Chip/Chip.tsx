import clsx from 'clsx'
import React from 'react'

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * @boolean for whether the Chip is selected
	 */
	selected: boolean

	/**
	 * @string to select the variant of Chip
	 */
	text?: string

	/**
	 * Styles to give to chip if selected.
	 */
	selectedClassName?: string
}

const Chip: React.FC<ChipProps> = React.forwardRef(
	React.memo((props, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				className={clsx(
					'rounded-lg border border-gray-50/25 py-1 px-3 text-lg text-gray-50',
					'transition-all duration-300',
					!props.disabled ? 'hover:border-gray-50/100' : 'text-gray-50/30',
					props.selected && !props.disabled && 'border-blue-400 bg-blue-400 hover:border-blue-400',
					props.className,
					props.selected && props.selectedClassName
				)}
			>
				{props.text || props.children}
			</button>
		)
	})
)

export default Chip
