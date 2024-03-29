import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DropDown, DropDownProps } from '../components'

export default {
	title: 'component/DropDown',
	component: DropDown,
} as Meta

const Template: Story<DropDownProps> = (args: DropDownProps) => <DropDown {...args} />

const Default = Template.bind({})
Default.args = {
	data: { India: 'India', Russia: 'Russia', China: 'China' },
	onChange: null,
}

export { Default }
