import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Accordion, AccordionProps } from '..'

export default {
	title: 'component/Accordion',
	component: Accordion,
} as Meta

const Template: Story<AccordionProps> = (args: AccordionProps) => <Accordion {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Storybook Accordion Title',
	body: 'Body',
	children: (
		<div className='w-[63%] flex-col items-start'>
			<div className='text-ellipsis pb-2 text-base text-gray-50'>Storybook accordion </div>
		</div>
	),
}

export { Default }
