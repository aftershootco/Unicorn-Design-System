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
	close: () => void
	positiveClick?: () => void
	negativeClick?: () => void
}

const GenericDialog: React.FC<DialogProps> = (props) => {
	return (
		<dialog
			open={true}
			aria-labelledby='simple-dialog-title'
			onKeyUp={(e) => {
				if (e.key === 'Escape') {
					props.close()
				} else if (e.key === 'Enter' && props.positiveClick) {
					props.positiveClick()
				}
			}}
			className='default-dialog'
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
					<Button variant='tertiary' className='hoverBright text-h4 color-white cursor-pointer p-4-tb' onClick={props.negativeClick}>
						{props.negativeText}
					</Button>
				)}
			</div>
		</dialog>
	)
}

export default React.memo(GenericDialog)
