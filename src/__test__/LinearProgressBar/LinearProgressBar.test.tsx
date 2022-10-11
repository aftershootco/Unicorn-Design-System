import { render, screen } from '@testing-library/react'
import React from 'react'
import { LinearProgressBar } from '../../components'

describe('Testing -> LinearProgressBar', () => {
	it('To be in the document', () => {
		render(<LinearProgressBar />)
		expect(screen.getByTestId('nonDeterminant')).toBeInTheDocument()
	})

	it('To show determinant bar on value greater than 0', () => {
		render(<LinearProgressBar value={10} />)
		expect(screen.getByTestId('determinant')).toBeInTheDocument()
	})

	it('To show indeterminant bar on value equal to 0', () => {
		render(<LinearProgressBar value={0} />)
		expect(screen.getByTestId('nonDeterminant')).toBeInTheDocument()
	})
})
