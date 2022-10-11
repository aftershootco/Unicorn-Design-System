import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Chip } from '../../components'

describe('Testing -> Chip', () => {
	it('To be rendered with default values', () => {
		render(<Chip onClick={() => {}} text='aftershoot' className='class' />)
		expect(screen.getByText('aftershoot')).toHaveClass('prefer-primary')
	})

	it('To have disabled true', () => {
		render(<Chip onClick={() => {}} disabled={true} />)
		expect(screen.getByRole('button')).toHaveClass('disabled-true')
	})

	it('To have disabled false', () => {
		render(<Chip onClick={() => {}} disabled={false} />)
		expect(screen.getByRole('button')).toHaveClass('disabled-false')
	})

	it('To check functionality of onClick', () => {
		const logSpy = jest.spyOn(console, 'log')
		render(
			<Chip
				onClick={() => {
					console.log('hello')
				}}
				disabled={true}
			/>
		)
		const chip = screen.getByRole('button')
		expect(chip).toBeInTheDocument()
		userEvent.click(chip)
		expect(logSpy).not.toHaveBeenCalled()
	})
})
