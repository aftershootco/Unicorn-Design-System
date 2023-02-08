import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HeadlessDropdown, HeadlessDropdownProps } from '..'

export default {
	title: 'component/HeadlessDropdown',
	component: HeadlessDropdown,
} as Meta

const Template: Story<HeadlessDropdownProps> = (args: HeadlessDropdownProps) => <HeadlessDropdown {...args} />

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
