import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Switch } from '../../components'

describe(`Testing -> Switch`, () => {
	it(`should be in the document`, () => {
		render(<Switch onChange={() => {}} />)
		expect(screen.getByTestId('test')).toBeInTheDocument()
	})

	it(`should trigger onChange on click with false`, async () => {
		const logSpy = jest.spyOn(console, 'log')
		render(<Switch value={true} onChange={(bool) => console.log(bool)} />)
		await userEvent.click(screen.getByTestId('test'))
		expect(logSpy).toHaveBeenCalledWith(false)
	})

	it(`should trigger onChange on click with true`, async () => {
		const logSpy = jest.spyOn(console, 'log')
		render(<Switch value={false} onChange={(bool) => console.log(bool)} />)
		await userEvent.click(screen.getByTestId('test'))
		expect(logSpy).toHaveBeenCalledWith(true)
	})
})
