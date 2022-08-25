import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Switch, SwitchProps } from '../'

export default {
	title: 'component/Switch',
	component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args: SwitchProps) => <Switch {...args} />

const Default = Template.bind({})
Default.args = {
	value: true,
	varient: 'filled',
}

export { Default }
