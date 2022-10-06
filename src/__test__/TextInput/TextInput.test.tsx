import React from "react";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";
import { TextInput } from "../../components";

describe(`Testing -> TextInput`, () => {
    it(`to get snapshot`, () => {
		const tree = renderer.create(<TextInput value='aftershoot'/>).toJSON()
		expect(tree).toMatchSnapshot()
	})

    it(`should be in the document`, () => {
        render(<TextInput value='aftershoot'/>);
        expect(screen.getByTestId('test1')).toBeInTheDocument();
    })

    const temp1:('primary' | 'secondary' | 'tertiary')[] = ['primary','secondary','tertiary'];
    for(let i=0; i<temp1.length; ++i){
        it(`should display the required div according to variant`, () => {
            render(<TextInput value='aftershoot' variant={temp1[i]}/>);
            if(temp1[i] === 'primary' || temp1[i] === 'secondary'){
                expect(screen.getByTestId('test1')).toBeInTheDocument();
            }else{
                expect(screen.getByTestId('test2')).toBeInTheDocument();
            }
        })
    }

    it(`should display the required div according to variant:-primary and type:-password`, () => {
        render(<TextInput value='aftershoot' variant='primary' type='password' />)
        expect(screen.getByTestId('test1')).toBeInTheDocument();
        expect(screen.getByTestId('test3')).toBeInTheDocument();
    })

    it(`should display the required div according to variant:-primary and type:-text`, () => {
        render(<TextInput value='aftershoot' variant='primary' type='text' />)
        expect(screen.getByTestId('test1')).toBeInTheDocument();
    })

    it(`should display the required div according to variant:-tertiary and type:-text`, () => {
        render(<TextInput value='aftershoot' variant='tertiary' type='text' />)
        expect(screen.getByTestId('test2')).toBeInTheDocument();
    })
})