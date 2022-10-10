import { render } from '@testing-library/react'
import React from 'react'
import { Divider } from '../../components'

describe(`Testing -> Divider`, () => {
	it(`to have variant vertical`, () => {
		const { container } = render(<Divider variant='vertical' />)
		expect(container.querySelector('.vertical')).not.toHaveClass('horizontal')
	})

	it(`to have variant horizontal`, () => {
		const { container } = render(<Divider variant='horizontal' />)
		expect(container.querySelector('.horizontal')).not.toHaveClass('vertical')
	})

	it(`to check for classname`, () => {
		const { container } = render(<Divider variant='vertical' className='aftershoot' />)
		expect(container.querySelector('.vertical')).toHaveClass('aftershoot')
	})
})
