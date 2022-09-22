import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropDown } from '../../components'

const tempData = {
	key1: 1,
	key2: 2,
	key3: 3,
	key4: 'hello',
	gun: 4,
    qweqweqwe: 'eqweqweqwe',
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
		render(<DropDown data={tempData} onChange={() => {}} value={2} dataTestId='test' />)
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
