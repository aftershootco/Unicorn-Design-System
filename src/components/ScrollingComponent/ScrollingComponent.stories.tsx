import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DropDown, ScrollingComponent, ScrollingComponentProps } from '..'

export default {
	title: 'component/ScrollingComponent',
	component: DropDown,
} as Meta
const COLOR_LIST = ['Green', 'Blue', 'Yellow', 'Red', 'Purple', 'None']
const Template: Story<ScrollingComponentProps> = (args: ScrollingComponentProps) => <ScrollingComponent {...args} />
const Hexmap = {
	Red: '#AC3131',
	Yellow: '#867705',
	Green: '#1F6A46',
	Blue: '#017ABA',
	Purple: '#76426E',
	Orange: '#db6320',
	None: '#777777',
	null: '#777777',
	White: '#fff',
	'': '#777777',
}
const Default = Template.bind({})
Default.args = {
	children: COLOR_LIST.slice(0, 5).map((color) => {
		return (
			<div
				key={color}
				style={{ backgroundColor: `${Hexmap[color]}`, width: '500px' }}
				className={'relative mx-1 cursor-pointer gap-10 rounded-full transition-all duration-300'}
			>
				<div className='h-full w-[500px] bg-black p-4 text-white'>{color}</div>
			</div>
		)
	}),
	parentClassName: 'p-10',
}

export { Default }
