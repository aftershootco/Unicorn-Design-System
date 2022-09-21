import React from 'react';
import {Button} from '../../components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(`Testing -> Button`, () => {
    
    it(`to be enabled`, () => {
        render(<Button onClick={()=>{}} disabled={false} text='aftershoot'/>);
        expect(screen.getByRole('button', {name: /aftershoot/i})).toBeEnabled();
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

    it(`to have onclick disabled when button is disabled`, () => {
        render(<Button onClick={() => {}} disabled={true}/>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        userEvent.click(button);
        expect(button).toBeDisabled();
    })
})