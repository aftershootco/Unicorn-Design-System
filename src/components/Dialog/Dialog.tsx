import React from 'react'
import { classNames } from '../../utils'
import Button from '../Button/Button'
// import './Dialog.scss'

export interface DialogProps {
	/**
	 * @string Primary/First Button Text
	 */
	positiveText?: string

	/**
	 * @string Tertiary/Second Button Text
	 */
	negativeText?: string

	/**
	 * CSS style object
	 */
	style?: React.CSSProperties

	/**
	 * Children nodes to be passed as arguements to the dialog box
	 */
	children: React.ReactNode

	/**
	 * @function for onClose callback on the Dialog box
	 */
	onClose: () => void

	/**
	 * @function for onClick Callback on the primary button
	 */
	positiveClick?: () => void

	/**
	 * @function for onClick Callback on the tertiary button
	 */
	negativeClick?: () => void
}

const Dialog: React.FC<DialogProps> = (props) => {
	return (
		<>
			<div className='absolute bg-grey900 h-full w-full z-[1301]'></div>
			<dialog
				open={true}
				aria-labelledby='simple-dialog-title'
				onKeyUp={(e) => {
					if (e.key === 'Escape') {
						props.onClose()
					} else if (e.key === 'Enter' && props.positiveClick) {
						props.positiveClick()
					}
				}}
				className={classNames(
					'absolute p-10 bg-grey800 rounded-[10px]',
					'shadow-none min-w-[34%] max-w-[36%] top-[50%] border-none z-[1302]'
				)}
				style={props.style}
			>
				{props.children}
				<div className={'flex-col align-center ' + (props?.positiveText ? 'p-6-t' : 'p-0-t')}>
					{props?.positiveText && <Button variant='primary' className='w-[50%]' text={props.positiveText} onClick={props.positiveClick} />}
					{props?.negativeText && (
						<Button variant='tertiary' className='text-md text-white w-[50%]' text={props.negativeText} onClick={props.negativeClick} />
					)}
				</div>
			</dialog>
		</>
	)
}

export default React.memo(Dialog)
