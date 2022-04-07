import React from 'react'
import { Meta, Story } from '@storybook/react'
import PreferenceButton, { PreferenceButtonProps } from '../components/PreferenceButton/PreferenceButton'

export default {
	title: 'component/PreferenceBtn',
	component: PreferenceButton,
} as Meta

const Template: Story<PreferenceButtonProps> = (args: PreferenceButtonProps) => <PreferenceButton {...args} />

export const Default = Template.bind({})
Default.args = {
	text: 'Lenient',
	onClick: () => {},
	className: 'selected-option',
	index: 1,
}
