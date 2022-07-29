import React from 'react'
import { Meta, Story } from '@storybook/react'
import TextInput, { TextInputProps } from '../components/TextInput/TextInput'

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
	variant: 'primary',
	type: 'text',
	placeholder: 'name',
	style: { color: 'black' },
}

export { Default }
