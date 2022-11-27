import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Switch } from '..';

export default {
	title: 'component/Switch',
	component: Switch,
} as Meta

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (args: React.InputHTMLAttributes<HTMLInputElement>) => <Switch {...args} />

const Default = Template.bind({})
Default.args = {
	checked: true,
}

export { Default };

