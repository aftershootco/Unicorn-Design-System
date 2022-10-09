import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import { LinearProgressBar } from '../../components'

describe(`Testing -> LinearProgressBar`, () => {
	it(`to get snapshot`, () => {
		const tree = renderer.create(<LinearProgressBar />).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it(`should be in the document`, () => {
		render(<LinearProgressBar />)
		expect(screen.getByTestId('test2')).toBeInTheDocument()
	})

	it(`should show determinant bar on value greater than 0`, () => {
		render(<LinearProgressBar value={10} />)
		expect(screen.getByTestId('test1')).toBeInTheDocument()
	})

	it(`should show indeterminant bar on value equal to 0`, () => {
		render(<LinearProgressBar value={0} />)
		expect(screen.getByTestId('test2')).toBeInTheDocument()
	})
})
