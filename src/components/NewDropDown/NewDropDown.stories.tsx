import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NewDropDown, NewDropDownProps } from '..'

export default {
	title: 'component/DropDown',
	component: NewDropDown,
} as Meta

const Template: Story<NewDropDownProps> = (args: NewDropDownProps) => <NewDropDown {...args} />

const Default = Template.bind({})
Default.args = {
	value: 'dropdown',
	data: {
		dropdown: {
			label: 'Dropdown',
			value: 'dropdown',
		},
		dropdown1: {
			label: 'Dropdown 1',
			value: 'dropdown1',
		},
		dropdown2: {
			label: 'Dropdown 2',
			value: 'dropdown2',
		},
		dropdown3: {
			label: 'Dropdown 3',
			value: 'dropdown3',
		},
		other: {
			label: 'Other',
			value: 'other',
		},
	},
}

export { Default }
