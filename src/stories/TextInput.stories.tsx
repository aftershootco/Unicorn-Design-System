import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Switch, SwitchProps } from '../components'
import TextInput, { TextInputProps } from '../components/TextInput/TextInput'

export default {
	title: 'component/TextInput',
	component: TextInput,
	argTypes: {
		onChange: { action: 'onChange', description: 'returns a boolean value' },
	},
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
	type:'password',
	placeholder:"name"
}
