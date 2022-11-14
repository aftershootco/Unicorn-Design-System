import React from "react";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    step: number 
}

const Slider:React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input type="range" min={props.min} max={props.max} step={props.step} value={props.value} />
    )
}

export default React.memo(Slider);