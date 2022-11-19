import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Carousel, CarouselProps } from '../components'

export default {
	title: 'component/Carousel',
	component: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args: CarouselProps) => <Carousel {...args} />

const Default = Template.bind({})
Default.args = {
	data: ['hello', 'world', 'Shaney', 'Waris'],
}

export { Default }
