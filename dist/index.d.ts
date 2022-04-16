import React from 'react';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    children?: string | React.ReactNode;
    style?: React.CSSProperties;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'alert' | 'warning';
    onClick: (e: MouseEvent) => void;
}
declare const Button: React.FC<ButtonProps>;

interface CheckboxProps {
    defaultValue?: boolean;
    onChange: (e: boolean) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface SwitchProps {
    defaultValue?: boolean;
    onChange: (e: boolean) => void;
}
declare const Switch: React.FC<SwitchProps>;

interface DropDownProps {
    value: any;
    data: any;
    onChange: (value: string) => void;
    styles?: React.CSSProperties;
    className?: string;
    variant?: string;
}
declare const DropDown: React.FC<DropDownProps>;

interface LabelProps {
    label: string;
    className?: string;
}
declare const Label: React.FC<LabelProps>;

interface PreferenceButtonProps {
    text: string;
    className?: string;
    onClick?: (val: number) => void;
    index: number;
}
declare const PreferenceButton: React.FC<PreferenceButtonProps>;

declare const index_d_Button: typeof Button;
type index_d_ButtonProps = ButtonProps;
declare const index_d_Checkbox: typeof Checkbox;
type index_d_CheckboxProps = CheckboxProps;
declare const index_d_Switch: typeof Switch;
type index_d_SwitchProps = SwitchProps;
declare const index_d_Label: typeof Label;
type index_d_LabelProps = LabelProps;
declare const index_d_DropDown: typeof DropDown;
type index_d_DropDownProps = DropDownProps;
declare const index_d_PreferenceButton: typeof PreferenceButton;
type index_d_PreferenceButtonProps = PreferenceButtonProps;
declare namespace index_d {
  export {
    index_d_Button as Button,
    index_d_ButtonProps as ButtonProps,
    index_d_Checkbox as Checkbox,
    index_d_CheckboxProps as CheckboxProps,
    index_d_Switch as Switch,
    index_d_SwitchProps as SwitchProps,
    index_d_Label as Label,
    index_d_LabelProps as LabelProps,
    index_d_DropDown as DropDown,
    index_d_DropDownProps as DropDownProps,
    index_d_PreferenceButton as PreferenceButton,
    index_d_PreferenceButtonProps as PreferenceButtonProps,
  };
}

export { index_d as default };
