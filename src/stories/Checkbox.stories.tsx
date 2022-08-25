import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckBox, CheckBoxProps } from '../'

export default {
	title: 'component/Checkbox',
	component: CheckBox,
	argTypes: {
		onChange: { action: 'onChange', description: 'returns a boolean value' },
	},
} as Meta

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }
