import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Accordion, AccordionProps } from '../components'

export default {
	title: 'component/Accordion',
	component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />

const Default = Template.bind({})
Default.args = {
	title: 'Drop Down',
	subtitle: 'Option 1',
}

export { Default }
