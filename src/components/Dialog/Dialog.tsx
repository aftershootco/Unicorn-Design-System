import React from 'react'
import Button from '../Button/Button'
import './Dialog.scss'

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
		<dialog
			open={true}
			aria-labelledby='simple-dialog-title'
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					props.onClose()
				} else if (e.key === 'Enter' && props.positiveClick) {
					props.positiveClick()
				}
			}}
			className='default-dialog relative bg-grey800 p-10 p-8-b br-10'
			style={props.style}
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
