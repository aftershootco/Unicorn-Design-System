import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from '../components'

export default {
	title: 'component/Button',
	component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

const Default = Template.bind({})
Default.args = {
	children: 'Button',
	onClick: null,
	variant: 'primary',
}

export { Default }
