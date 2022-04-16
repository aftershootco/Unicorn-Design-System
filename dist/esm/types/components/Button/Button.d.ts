import React from 'react';
import './Button.scss';
export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    children?: string | React.ReactNode;
    style?: React.CSSProperties;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'warning';
    onClick: (e: MouseEvent) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
