import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TextInput, TextInputProps } from '../components'

export default {
	title: 'component/TextInput',
	component: TextInput,
	argTypes: {
		onChange: { action: 'onChange', description: 'returns a boolean value' },
	},
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

const Default = Template.bind({})
Default.args = {
	type: 'text',
	placeholder: 'name',
	style: { color: 'black' },
}

export { Default }
