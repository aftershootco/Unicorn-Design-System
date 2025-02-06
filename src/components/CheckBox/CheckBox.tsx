import { TickIcon } from '@aftershootco/unicorn-icons'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { cn } from '../../utils'

export enum CheckboxVariant {
	Small = 'sm',
	Medium = 'md',
	Large = 'lg',
}

export type TCheckboxVariant = `${CheckboxVariant}`

export interface CheckBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	/**
	 *
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * Parent div classes
	 */
	parentClassname?: string

	/**
	 * child div classes
	 */
	childClassname?: string

	/**
	 * color of a checkbox
	 */
	color?: string

	/**
	 * pre defined size of a checkbox
	 */

	size?: TCheckboxVariant

	/**
	 * Value of the checkbox.
	 * @Default false
	 */
	value: boolean

	/**
	 * Whether the checkbox is disabled
	 * @Default false
	 */
	disabled?: boolean

	/**
	 * Function to be called when checkbox is checked.
	 */
	onChange: (value: boolean, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CheckBox: React.FC<CheckBoxProps> = React.memo((props) => {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			props.onChange(!props.value, e)
		},
		[props.onChange, props.value]
	)

	return (
		<div id={props.id} className='group w-fit'>
			{props.variant === 'primary' && (
				<div
					className={cn(
						'grid w-max cursor-pointer place-items-center rounded-[0.188rem] border border-solid border-gray-50/10 bg-gray-50/10 p-[0.156rem] transition-all duration-200 ease-in-out  group-hover:border-gray-400',
						props.disabled && 'pointer-events-none cursor-default bg-transparent',
						props.className
					)}
					onClick={onClick}
				>
					{props.value ? (
						<CheckIcon
							className={cn(
								'pointer-events-auto h-[0.844rem] w-[0.844rem] rounded-[0.063rem] bg-blue-400 transition-all duration-200 ease-in-out  group-hover:bg-blue-300',
								props.disabled && 'bg-gray-50/30',
								// padding around the check icon is 2.5px
								props.size === CheckboxVariant.Small && 'h-[0.719rem] w-[0.719rem]', // 14px - 2.5px
								props.size === CheckboxVariant.Large && 'h-[1.094rem] w-[1.094rem]' //20px - 2.5px
								// size md is default - 16px - 2.5px
							)}
						/>
					) : (
						<div
							className={cn(
								'h-[0.844rem] w-[0.844rem] rounded-[0.063rem] transition-all duration-200 ease-in-out',
								!props.disabled && 'group-hover:bg-gray-50/20'
							)}
						/>
					)}
				</div>
			)}
			{props.variant === 'secondary' && (
				<div
					className={clsx(
						props.parentClassname,
						props.disabled ? 'pointer-events-none' : 'my-auto cursor-pointer border border-solid p-[1px]'
					)}
					style={{
						background: !props.value ? (props.color ? props.color : 'rgb(226 226 226/0.3)') : 'transparent',
						borderColor: props.value ? (props.color ? props.color : 'rgb(226 226 226/0.3)') : 'rgb(226 226 226/0.3)',
					}}
					onClick={onClick}
				>
					{props.value ? (
						<div
							className={clsx(
								props.childClassname,
								'pointer-events-auto flex h-full w-full items-center justify-center transition-all duration-300	'
							)}
							style={{ background: props.value ? (props.color ? props.color : 'rgb(34 121 206)') : 'transparent' }}
						>
							<TickIcon />
						</div>
					) : (
						<div className={clsx(props.childClassname, 'transition-all duration-300')}></div>
					)}
				</div>
			)}
		</div>
	)
})

CheckBox.defaultProps = {
	variant: 'primary',
	parentClassname: 'w-5 h-5 rounded-sm',
	disabled: false,
}

export default CheckBox

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M8.81598 3.40349C9.01479 3.53349 9.0706 3.80004 8.94061 3.99885L6.01589 8.47195C5.94697 8.57738 5.8353 8.64723 5.71037 8.66319C5.58543 8.67916 5.45979 8.63952 5.36659 8.55481L3.47413 6.8344C3.29837 6.67461 3.28541 6.40259 3.4452 6.22683C3.60498 6.05106 3.877 6.0381 4.05277 6.1979L5.57198 7.57899L8.22065 3.52811C8.35064 3.3293 8.61717 3.27351 8.81598 3.40349Z'
				fill='#E2E2E2'
			/>
		</svg>
	)
}
