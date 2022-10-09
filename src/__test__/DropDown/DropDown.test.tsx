import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { DropDown } from '../../components'

const tempData = {
	key1: 1665038443,
	key2: 1665038444,
	key3: 1665038445,
	key4: 1665038446,
	key5: 1665038447,
	key6: 1665038448,
}

describe(`Testing -> DropDown`, () => {
	it(`to be in the document`, () => {
		render(<DropDown value='aftershoot' data={tempData} onChange={() => {}} dataTestId='test' />)
		const dropDown = screen.getByTestId('test')
		expect(dropDown).toBeInTheDocument()
		expect(dropDown).not.toBeEmptyDOMElement()
	})

	it(`to open dropdown on click and again close on click`, async () => {
		window.HTMLElement.prototype.scrollIntoView = jest.fn()
		render(<DropDown data={tempData} onChange={() => {}} value={2} data-testId='test' />)
		const clickDiv = screen.getByTestId('test1')
		await userEvent.click(clickDiv)
		expect(screen.getByTestId('test2')).toBeInTheDocument()
		expect(screen.getByTestId('test3')).toBeInTheDocument()
		await userEvent.click(clickDiv)
		expect(screen.queryByTestId('test2')).not.toBeInTheDocument()
		expect(screen.queryByTestId('test3')).not.toBeInTheDocument()
		jest.clearAllMocks()
	})

	Object.keys(tempData).map((item) => {
		it(`to check for values being inserted into the dropdown`, async () => {
			jest.spyOn(console, 'log')
			window.HTMLElement.prototype.scrollIntoView = jest.fn()
			render(<DropDown data={tempData} onChange={() => {}} value='hello' dataTestId='test' />)
			await userEvent.click(screen.getByTestId('test1'))
			screen.getByTestId(`test-${item}`)
			jest.clearAllMocks()
		})
	})
})
