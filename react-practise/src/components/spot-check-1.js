import React from "react";

const SpotCheck1 = () => {
    const hoverOver = () => {
        console.log("I was hovered!");
    };

    return <button onMouseEnter={hoverOver}>Hover over me</button>;
}

export default SpotCheck1;