import React from 'react';
import './dropDown.scss';
export interface DropDownProps {
    value: any;
    data: any;
    onChange: (value: string) => void;
    styles?: React.CSSProperties;
    className?: string;
    variant?: string;
}
declare const DropDown: React.FC<DropDownProps>;
export default DropDown;
