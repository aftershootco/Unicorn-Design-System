import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Slider } from '../components'

export default {
	title: 'component/Slider',
	component: Slider,
} as Meta

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args: React.InputHTMLAttributes<HTMLInputElement>) => <Slider {...args} />

const Default = Template.bind({})
Default.args = {
	value: '10',
}

export { Default }
