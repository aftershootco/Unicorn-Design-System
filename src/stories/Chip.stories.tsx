import React from 'react'
import { Meta, Story } from '@storybook/react'
import Chip, { ChipProps } from '../components/Chip/Chip'

export default {
	title: 'component/Chip',
	component: Chip,
} as Meta

const Template: Story<ChipProps> = (args: ChipProps) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
	text: 'Lenient',
	onClick: () => {},
	className: 'selected-option',
	index: 1,
}
