import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Switch, SwitchProps } from '../components'

export default {
	title: 'component/Switch',
	component: Switch,
} as Meta

const Template: Story<SwitchProps> = (args: SwitchProps) => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {
	value: false,
}
