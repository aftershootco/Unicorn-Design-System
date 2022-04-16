import React from 'react';
export interface CheckboxProps {
    defaultValue?: boolean;
    onChange: (e: boolean) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
