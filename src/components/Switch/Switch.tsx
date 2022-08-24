import React, { useCallback } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'
import { classNames } from '../../utils'

export interface SwitchProps {
	/**
	 * User Defined className
	 */

	className?: string
	/**
	 * Varient type of a switch
	 * @default filled
	 * @wrong spelling
	 */
	varient?: 'filled' | 'outlined'

	/**
	 * State of the switch
	 * @default false
	 */
	value?: boolean

	/**
	 * Style applied.
	 */
	style?: React.CSSProperties

	/**
	 * Function to be called when switch is changed
	 */
	onChange: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = (props) => {
	// const onClick = useCallback(() => {
	// props.onChange(!props.value)
	// }, [props.onChange, props.value])

	return (
		<HeadlessSwitch
			checked={props.value}
			onChange={() => props.onChange(!props.value)}
			className={classNames(
				props.value ? 'bg-teal100' : props.varient === 'outlined' ? 'border-grey300 bg-white' : 'bg-grey300',
				'relative inline-flex flex-row items-center w-[2.470588235294118rem] h-[1.4705882352941179rem]',
				' shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
			)}
		>
			<span className={classNames(' transition-[width] shrink bg-transparent duration-200 ease-linear', props.value ? 'w-full' : 'w-0')}></span>
			<span
				aria-hidden='true'
				className={classNames(
					props.value ? 'bg-white' : props.varient === 'outlined' ? 'bg-grey300' : 'bg-white',
					'pointer-events-none shrink-0 h-4 w-4 mx-[2px] transform rounded-full shadow-lg ring-0 transition-all'
				)}
			/>
		</HeadlessSwitch>
	)
}

export default React.memo(Switch)
