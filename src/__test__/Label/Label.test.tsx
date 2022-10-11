import { render, screen } from '@testing-library/react'
import React from 'react'
import { Label } from '../../components'

describe('Testing -> Label', () => {
	it('To be in the document', () => {
		render(<Label label='aftershoot' />)
		expect(screen.getByText(/aftershoot/i)).toBeInTheDocument()
	})

	it('To have classname', () => {
		render(<Label label='aftershoot' className='hello' />)
		expect(screen.getByText(/aftershoot/i)).toHaveClass('hello')
	})

	it('To have provided reactNodes', () => {
		const reactNode = (
			<>
				<div>
					<div></div>
					<div>
						<div className='div'>unicorn</div>
					</div>
					<div></div>
				</div>
			</>
		)
		render(<Label label='aftershoot' children={reactNode} />)
		expect(screen.getByText(/unicorn/i)).toHaveClass('div')
	})
})
