import React, { useState, memo, JSXElementConstructor } from 'react'
import './Dialog.scss'

import Button from '../Button/Button'

export interface DialogProps {
	positiveButton: boolean
	positiveText?: string
	negativeButton?: boolean
	negativeText?: string
	style?: {}
	children: React.ReactNode
	onClose: () => void
	positiveClick?: () => void
	negativeClick?: () => void
}

const Dialog: React.FC<DialogProps> = (props) => {
	return (
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
			className='default-dialog relative bg-grey800 p-10 p-8-b br-10'
			style={props.style}
		>
			{props.children}
			<div className={'flex-col align-center ' + (props.positiveButton ? 'p-6-t' : 'p-0-t')}>
				{props.positiveButton && (
					<Button variant='primary' onClick={props.positiveClick} style={{ width: '50%' }}>
						{props.positiveText}
					</Button>
				)}
				{props.negativeButton && (
					<Button variant='tertiary' className='cursor-pointer hoverBright p-4-tb text-h4 color-white' onClick={props.negativeClick}>
						{props.negativeText}
					</Button>
				)}
			</div>
		</dialog>
	)
}

export default React.memo(Dialog)
