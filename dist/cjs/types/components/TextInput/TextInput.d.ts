import React from 'react';
export interface TextInputProps {
    type?: 'text' | 'password';
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
