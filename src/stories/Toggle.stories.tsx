import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Toggle, ToggleProps } from '../components'

export default {
	title: 'component/Toggle',
	component: Toggle,
} as Meta

const Template: Story<ToggleProps> = (args: ToggleProps) => <Toggle {...args} />

const Default = Template.bind({})
Default.args = {
	value: false,
	onClick: () => {},
    options: {
        first: 'First',
        second: 'Second',
    }
}

export {Default}
