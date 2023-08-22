
import React, { useState } from "react";

const InputTest = () => {
    const [text, setText] = useState("");
    const [checkboxValue, setCheckboxValue] = useState(false);

    const updateText = (event) => {
        setText(event.target.value);
    };

    const handleBoxChange = (event) => {
        setCheckboxValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={updateText} />
            <button>Alert</button>
            <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleBoxChange}
            />
        </div>
    );
};

export default InputTest;
