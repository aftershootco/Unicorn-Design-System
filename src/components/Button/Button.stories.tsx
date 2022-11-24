import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '..';

export default {
	title: 'component/Button',
	component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

const Default = Template.bind({})
Default.args = {
	text: 'Button',
	variant: 'primary',
}

export { Default };

