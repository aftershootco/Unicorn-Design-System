import React from 'react';
export interface PreferenceButtonProps {
    text: string;
    className?: string;
    onClick?: (val: number) => void;
    index: number;
}
declare const PreferenceButton: React.FC<PreferenceButtonProps>;
export default PreferenceButton;
