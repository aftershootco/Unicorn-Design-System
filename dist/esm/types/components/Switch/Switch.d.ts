import React from 'react';
export interface SwitchProps {
    defaultValue?: boolean;
    onChange: (e: boolean) => void;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
