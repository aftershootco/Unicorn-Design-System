import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from '../components'

export default {
	title: 'component/Checkbox',
	component: Checkbox,
	argTypes: {
		onChange: { action: 'onChange', description: 'returns a boolean value' },
	},
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {}
