import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Toggle } from '../../components'

describe('Testing -> Toggle', () => {
	it('To be on screen', () => {
		render(<Toggle value={true} options={{ first: 'hello', second: 'world' }} onClick={() => {}} />)
		expect(screen.getByTestId('toggle')).toBeInTheDocument()
	})

	it('To sync the value, options and onClick functionality with true value', async () => {
		const logSpy = jest.spyOn(console, 'log')
		const { container } = render(
			<Toggle
				value={true}
				options={{ first: 'hello', second: 'world' }}
				onClick={(e) => {
					console.log(e)
				}}
			/>
		)
		const button = container.querySelector('.yearly')
		await userEvent.click(button)
		expect(logSpy).toHaveBeenCalledWith(true)
		expect(button).toHaveTextContent('hello')
	})

	it('To sync the value, options and onClick functionality with false value', async () => {
		const logSpy = jest.spyOn(console, 'log')
		const { container } = render(
			<Toggle
				value={false}
				options={{ first: 'hello', second: 'world' }}
				onClick={(e) => {
					console.log(e)
				}}
			/>
		)
		const button = container.querySelector('.monthly')
		await userEvent.click(button)
		expect(logSpy).toHaveBeenCalledWith(false)
		expect(button).toHaveTextContent('world')
	})

	it('To show the required value in the toggle button', () => {
		const { container } = render(
			<Toggle
				value={false}
				options={{ first: 'hello', second: 'world' }}
				onClick={(e) => {
					console.log(e)
				}}
			/>
		)
		const button = container.querySelector('.toggle_button')
		expect(button).toHaveClass('toggleButton')
		expect(button).toHaveTextContent('world')
		expect(button).not.toHaveTextContent('hello')
	})
})
