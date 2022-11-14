import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Label } from '../components';

export default {
	title: 'component/Label',
	component: Label,
} as Meta

const Template: Story = (args) => <Label label='hello' {...args} />

const Default = Template.bind({})
Default.args = {
	label: 'now',
}

export { Default };

