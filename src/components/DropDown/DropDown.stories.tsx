import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DropDown, DropDownProps } from '..';

export default {
	title: 'component/DropDown',
	component: DropDown,
} as Meta

const Template: Story<DropDownProps> = (args: DropDownProps) => <DropDown {...args} />

const Default = Template.bind({})
Default.args = {
	value: 'dropdown',
}

export { Default };

