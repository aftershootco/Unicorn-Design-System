import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Accordion, AccordionProps } from '../components'

export default {
	title: 'component/Accordion',
	component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }
