import React from 'react'
import { render } from '@testing-library/react'
import { CheckBox } from '../../components'

describe(`Testing -> CheckBox`, () => {
	it(`to be not checked at initial render`, () => {
		const { container } = render(<CheckBox value={false} onChange={() => {}} />)
		const checkBox = container.querySelector('.asCheck')
		expect(checkBox).toBeEnabled()
		expect(checkBox).toBeEmptyDOMElement()
		expect(checkBox).toHaveClass('as-unchecked')
		expect(checkBox).not.toHaveClass('as-checked')
	})

	it(`to be checked with prop as true value`, () => {
		const { container } = render(<CheckBox value={true} onChange={() => {}} />)
		const checkBox = container.querySelector('.asCheck')
		expect(checkBox).toBeEnabled()
		expect(checkBox).not.toBeEmptyDOMElement()
		expect(checkBox).toHaveClass('as-checked')
		expect(checkBox).not.toHaveClass('as-unchecked')
	})
})
