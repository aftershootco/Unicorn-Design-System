import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Divider, DividerProps } from '../components'

export default {
	title: 'component/Divider',
	component: Divider,
} as Meta

const Template: Story<DividerProps> = (args: DividerProps) => <Divider {...args} />

const Default = Template.bind({})
Default.args = {
	varient: 'vertical',
	style: { backgroundColor: 'black' },
}

export { Default }
