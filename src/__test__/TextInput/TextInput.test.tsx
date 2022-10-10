import { render, screen } from '@testing-library/react'
import React from 'react'
import { TextInput } from '../../components'

describe(`Testing -> TextInput`, () => {
	it(`should be in the document`, () => {
		render(<TextInput value='aftershoot' />)
		expect(screen.getByTestId('inputPrimary')).toBeInTheDocument()
	})

	const temp1: ('primary' | 'secondary' | 'tertiary')[] = ['primary', 'secondary', 'tertiary']
	for (let i = 0; i < temp1.length; ++i) {
		it(`should display the required div according to variant`, () => {
			render(<TextInput value='aftershoot' variant={temp1[i]} />)
			if (temp1[i] === 'primary' || temp1[i] === 'secondary') {
				expect(screen.getByTestId('inputPrimary')).toBeInTheDocument()
			} else {
				expect(screen.getByTestId('inputTertiary')).toBeInTheDocument()
			}
		})
	}

	it(`should display the required div according to variant:-primary and type:-password`, () => {
		render(<TextInput value='aftershoot' variant='primary' type='password' />)
		expect(screen.getByTestId('inputPrimary')).toBeInTheDocument()
		expect(screen.getByTestId('password')).toBeInTheDocument()
	})

	it(`should display the required div according to variant:-primary and type:-text`, () => {
		render(<TextInput value='aftershoot' variant='primary' type='text' />)
		expect(screen.getByTestId('inputPrimary')).toBeInTheDocument()
	})

	it(`should display the required div according to variant:-tertiary and type:-text`, () => {
		render(<TextInput value='aftershoot' variant='tertiary' type='text' />)
		expect(screen.getByTestId('inputTertiary')).toBeInTheDocument()
	})
})
