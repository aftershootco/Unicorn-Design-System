import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Dialog, DialogProps } from '../components'

export default {
	title: 'component/Dialog',
	component: Dialog,
} as Meta

const Template: Story<DialogProps> = (args) => <Dialog {...args} />

const Default = Template.bind({})
Default.args = {
	positiveButton: true,
	positiveText: 'Okay',
	negativeButton: true,
	negativeText: 'Cancel',
	style: {},
	children: <div>Are you good ?</div>,
	onClose: null,
	positiveClick: null,
	negativeClick: null,
}

export { Default }
