import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RadioButtons } from '..'
import { RadioButtonProps } from './RadioButton'

export default {
	title: 'component/RadioButtons',
	component: RadioButtons,
} as Meta

const Template: Story<RadioButtonProps> = (args: RadioButtonProps) => <RadioButtons {...args} />

const Default = Template.bind({})
Default.args = {
	selected: true,
}

export { Default }
