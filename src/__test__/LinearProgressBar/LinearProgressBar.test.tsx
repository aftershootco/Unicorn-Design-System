import { render, screen } from '@testing-library/react'
import React from 'react'
import { LinearProgressBar } from '../../components'

describe(`Testing -> LinearProgressBar`, () => {
	it(`should be in the document`, () => {
		render(<LinearProgressBar />)
		expect(screen.getByTestId('nonDeterminant')).toBeInTheDocument()
	})

	it(`should show determinant bar on value greater than 0`, () => {
		render(<LinearProgressBar value={10} />)
		expect(screen.getByTestId('determinant')).toBeInTheDocument()
	})

	it(`should show indeterminant bar on value equal to 0`, () => {
		render(<LinearProgressBar value={0} />)
		expect(screen.getByTestId('nonDeterminant')).toBeInTheDocument()
	})
})
