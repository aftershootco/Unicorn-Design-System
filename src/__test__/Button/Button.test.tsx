import React from 'react';
import renderer from 'react-test-renderer'
import {Button} from '../../components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Testing -> Button`, () => {
    it(`to get snapshot`, () => {
        const tree = renderer
            .create(<Button onClick={()=>{}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it(`to be enabled`, async () => {
        render(<Button onClick={()=>{}} disabled={false} text='aftershoot'/>);
        const button = screen.getByRole('button', {name: /aftershoot/i}); 
        expect(button).toBeEnabled();
    })
    
    it(`to check for onClick`, async () => {
        const logSpy = jest.spyOn(console, 'log');
        render(<Button onClick={()=>{console.log('hello')}} disabled={false} text='aftershoot'/>);
        await userEvent.click(screen.getByRole('button', {name: /aftershoot/i}));
        expect(logSpy).toHaveBeenCalledWith('hello');
    })

    const variant: ('primary' | 'secondary' | 'tertiary' | 'alert' | 'pause' | 'save' | 'white-filled' | 'facebook' | undefined )[] = ['primary', 'secondary', 'tertiary', 'alert', 'pause', 'save', 'white-filled', 'facebook', undefined];
    for(let i=0; i<variant.length; ++i){
        it(`to have classname with ${variant[i]} variant`, () => {
            if(variant[i] === undefined){
                render(<Button onClick={()=>{}} className='prac'/>)
                expect(screen.getByRole('button')).toHaveClass(`button-primary prac`);
                return;
            }
            render(<Button onClick={()=>{}} variant={`${variant[i]}`} className='prac'/>)
            expect(screen.getByRole('button')).toHaveClass(`button-${variant[i]} prac`);
        })
    }

    it(`to check whether button is disabled`, () => {
        render(<Button data-testId='test2' onClick={()=>{console.log('hello')}} disabled={true} text='aftershoot'/>);
        const button = screen.getByTestId(/test2/i);
        expect(button).toBeDisabled();
    })
})