import React from 'react'
import { Meta, Story } from '@storybook/react'
import Dialog, { DialogProps } from '../components/Dialog/Dialog'

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
	close: null,
	positiveClick: null,
	negativeClick: null,
}

export { Default }
