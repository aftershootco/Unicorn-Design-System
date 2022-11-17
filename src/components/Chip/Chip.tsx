import React from 'react';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Type of the chip. Default is 'primary'
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Background color of the btn.
	 */
	backgroundColor?: string

	/**
	 * Text of the button.
	 */
	text?: string

	/**
	 * Function to be called when hit a button
	 */
	onClick: () => void
}

const Chip: React.FC<ChipProps> = ({ disabled = false, ...props }) => {
	return (
		<button
			{...props}
			className={
				'cursor-pointer font-lato text-sm font-normal leading-[150%] text-[#ffffff] ' +
				`prefer-${props.variant ? props.variant : 'primary'} ${props.className} ` +
				`disabled-${disabled} border-2 border-solid ${props.backgroundColor}`
			}
			style={{ background: `${props.backgroundColor}`, ...props.style }}
			onClick={!disabled && props.onClick}
		>
			{props.text || props.children}
		</button>
	)
}

export default React.memo(Chip)
