import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { CheckBox } from '../../components'

describe(`Testing -> CheckBox`, () => {
	it(`to be not checked at initial render`, async () => {
		const { container } = render(<CheckBox value={false} onChange={() => {}} />)
		const checkBox = container.querySelector('.asCheck')
		expect(checkBox).toBeEnabled()
		expect(checkBox).toBeEmptyDOMElement()
		expect(checkBox).toHaveClass('as-unchecked')
		expect(checkBox).not.toHaveClass('as-checked')
	})

	it(`to get change on click`, async () => {
		const logSpy = jest.spyOn(console, 'log')
		const { container } = render(
			<CheckBox
				value={false}
				onChange={(value) => {
					console.log(value)
				}}
			/>
		)
		await userEvent.click(container.querySelector('.asCheck'))
		expect(logSpy).toHaveBeenCalled()
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
