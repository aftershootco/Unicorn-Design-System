import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import renderer from 'react-test-renderer'
import { Chip } from '../../components'

describe(`Testing -> Chip`, () => {
	it(`to get snapshot`, () => {
		const tree = renderer.create(<Chip onClick={() => {}} backgroundColor='blue' />).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it(`to be rendered with default values`, () => {
		render(<Chip onClick={() => {}} text='aftershoot' className='class' />)
		expect(screen.getByText('aftershoot')).toHaveClass('prefer-primary')
	})

	it(`to have disabled true`, () => {
		render(<Chip onClick={() => {}} disabled={true} />)
		expect(screen.getByRole('button')).toHaveClass('disabled-true')
	})

	it(`to have disabled false`, () => {
		render(<Chip onClick={() => {}} disabled={false} />)
		expect(screen.getByRole('button')).toHaveClass('disabled-false')
	})

	it(`to check functionality of onClick`, () => {
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
