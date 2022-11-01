import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Slider, SliderProps } from '../components'

export default {
	title: 'component/Slider',
	component: Slider,
} as Meta

const Template: Story<SliderProps> = (args: SliderProps) => <Slider {...args} />

const Default = Template.bind({})
Default.args = {
	value: 0,
	min: 0,
	max: 10,
	step: 1,
}

export { Default }
