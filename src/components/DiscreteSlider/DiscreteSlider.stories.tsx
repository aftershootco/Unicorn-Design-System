import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DiscreteSlider, DiscreteSliderProps } from '..'

export default {
	title: 'component/DiscreteSlider',
	component: DiscreteSlider,
} as Meta

const Template: Story<DiscreteSliderProps> = (args: DiscreteSliderProps) => <DiscreteSlider {...args} />

const Default = Template.bind({})
Default.args = {
	values: [
		{
			value: '0',
			label: 'Least',
		},
		{
			value: '1',
			label: 'Less',
		},
		{
			value: '2',
			label: 'More',
		},
		{
			value: '3',
			label: 'Most',
		},
	],
	selected: {
		value: '2',
		label: 'More',
	},
}

export { Default }
