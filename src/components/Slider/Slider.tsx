import React from "react";

const Slider:React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input type="range" value={props.value} />
    )
}

export default Slider;