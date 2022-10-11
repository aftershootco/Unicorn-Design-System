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

describe('Testing -> DropDown', () => {
	it('To be in the document', () => {
		render(<DropDown value='aftershoot' data={tempData} onChange={() => {}} dataTestId='test' />)
		const dropDown = screen.getByTestId('test')
		expect(dropDown).toBeInTheDocument()
		expect(dropDown).not.toBeEmptyDOMElement()
	})

	it('To open dropdown on click and again close on click', async () => {
		window.HTMLElement.prototype.scrollIntoView = jest.fn()
		render(<DropDown data={tempData} onChange={() => {}} value={2} data-testId='test' />)
		const clickDiv = screen.getByTestId('dropDown')
		await userEvent.click(clickDiv)
		expect(screen.getByTestId('closeOptions')).toBeInTheDocument()
		expect(screen.getByTestId('dropDownValues')).toBeInTheDocument()
		await userEvent.click(clickDiv)
		expect(screen.queryByTestId('closeOptions')).not.toBeInTheDocument()
		expect(screen.queryByTestId('dropDownValues')).not.toBeInTheDocument()
		jest.clearAllMocks()
	})

	Object.keys(tempData).map((item) => {
		it('To check for values being inserted into the dropdown', async () => {
			jest.spyOn(console, 'log')
			window.HTMLElement.prototype.scrollIntoView = jest.fn()
			render(<DropDown data={tempData} onChange={() => {}} value='hello' dataTestId='test' />)
			await userEvent.click(screen.getByTestId('dropDown'))
			screen.getByTestId(`test-${item}`)
			jest.clearAllMocks()
		})
	})
})
