import React from 'react'
import Button from '../Button/Button'
import './Dialog.scss'

export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
	/**
	 * @string Primary/First Button Text
	 */
	positiveText?: string

	/**
	 * @string Tertiary/Second Button Text
	 */
	negativeText?: string

	/**
	 * @function for onClose Callback on the Dialog Box
	 */
	onClose?: () => void

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
		<dialog
			{...props}
			open={true}
			aria-labelledby='simple-dialog-title'
			onKeyUp={(e) => {
				if (e.key === 'Escape') {
					props.onClose()
				} else if (e.key === 'Enter' && props.positiveClick) {
					props.positiveClick()
				}
			}}
			className='default-dialog relative bg-grey800 p-10 p-8-b br-10'
		>
			{props.children}
			<div className={'flex-col align-center ' + (props?.positiveText ? 'p-6-t' : 'p-0-t')}>
				{props?.positiveText && <Button variant='primary' text={props.positiveText} style={{ width: '50%' }} onClick={props.positiveClick} />}
				{props?.negativeText && (
					<Button
						variant='tertiary'
						className='cursor-pointer hoverBright p-4-tb text-h4 color-white'
						text={props.negativeText}
						onClick={props.negativeClick}
					/>
				)}
			</div>
		</dialog>
	)
}

export default React.memo(Dialog)
