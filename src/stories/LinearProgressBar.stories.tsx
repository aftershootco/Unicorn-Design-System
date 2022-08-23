import { Meta, Story } from '@storybook/react'
import React from 'react'
import LinearProgressBar, { LinearProgressBarProps } from '../components/LinearProgressBar/LinearProgressBar'

export default {
	title: 'component/LinearProgressBar',
	component: LinearProgressBar,
} as Meta

const Template: Story<LinearProgressBarProps> = (args: LinearProgressBarProps) => <LinearProgressBar {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }
