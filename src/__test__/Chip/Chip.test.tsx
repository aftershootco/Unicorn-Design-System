import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Chip } from '../../components';

describe(`Testing -> Chip`, () => {
    it(`to get snapshot`, () => {
        const tree = renderer
            .create(<Chip onClick={()=>{}} backgroundColor='blue'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it(`to be rendered with default values`, () => {
        render(<Chip onClick={()=>{}} text='aftershoot' className='class'/>);
        expect(screen.getByText('aftershoot')).toHaveClass('prefer-primary');
    })

    it(`to be disabled`, () => {
        render(<Chip onClick={()=>{}} disabled={true}/>);
        expect(screen.getByRole('button')).toHaveClass('disabled-true');
    })
})