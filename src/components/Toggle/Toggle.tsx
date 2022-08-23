import React from 'react'
import { classNames } from '../../utils'
// import './Toggle.scss'

export interface ToggleProps {
	/**
	 * Styles to be applied on the toggle.
	 */
	style?: React.CSSProperties

	/**
	 * If true, first option is selected. Otherwise the other one.
	 */
	value: boolean

	/**
	 * Function to be called when toggle is changed.
	 */
	onClick: (value: boolean) => void

	/**
	 * Options name for the toggle.
	 */
	options: {
		first: string
		second: string
	}
}

const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
	return (
		<div
			className={classNames(
				'relative flex flex-row w-[240px] border-solid border-[2px] border-[#323232] rounded-[100px] my-[2%] mx-[0%] p-[0.2%] pr-[5px] py-[3px]',
			)}
		>
			<button className={classNames(
				`absolute rounded-[100px] leading-[19px] border-none w-[50%] py-[5%] px-[5%] cursor-pointer font-['Lato'] font-[500] text-[1rem] text-white`
			)} onClick={() => props.onClick(true)}>
				{props.options.first}
			</button>
			<button className={classNames(`absolute cursor-pointer ml-[112px] rounded-[100px] border-none leading-[19px] w-[50%] py-[5%] px-[5%] font-['Lato'] font-[500] text-[1rem] text-white`)} onClick={() => props.onClick(false)}>
				{props.options.second}
			</button>
			<button className={
				classNames(`rounded-full transition-transform ease-linear duration-200 border-none leading-[19px] w-[50%] py-[5%] px-[5%] bg-[#1da0bc] z-10 font-['Lato'] font-[500] text-[1rem] text-white cursor-pointer`,
				!props.value ? 'translate-x-[116px] bg-[#1da0bc]' : '')}>
				{props.value ? props.options.first : props.options.second}
			</button>
		</div>
	)
}

export default React.memo(Toggle)
