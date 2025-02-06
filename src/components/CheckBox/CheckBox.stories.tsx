import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckBox, CheckBoxProps } from '..'

export default {
	title: 'component/CheckBox',
	component: CheckBox,
} as Meta

const Template: Story<CheckBoxProps> = (args: CheckBoxProps) => <CheckBox {...args} />

const Default = Template.bind({})
Default.args = {
	value: false,
	disabled: false,
	variant: 'primary',
}

const DefaultActive = Template.bind({})
DefaultActive.args = {
	value: true,
	disabled: false,
	variant: 'primary',
}

const DefaultActiveSm = Template.bind({})
DefaultActiveSm.args = {
	value: true,
	size: 'sm',
	disabled: false,
	variant: 'primary',
}

const DefaultActiveMd = Template.bind({})
DefaultActiveMd.args = {
	value: true,
	size: 'md',
	disabled: false,
	variant: 'primary',
}

const DefaultActiveLg = Template.bind({})
DefaultActiveLg.args = {
	value: true,
	size: 'lg',
	disabled: false,
	variant: 'primary',
}

const Secondary = Template.bind({})
Secondary.args = {
	value: true,
	disabled: false,
	variant: 'secondary',
}

export { Default, DefaultActive, DefaultActiveLg, DefaultActiveMd, DefaultActiveSm, Secondary }
