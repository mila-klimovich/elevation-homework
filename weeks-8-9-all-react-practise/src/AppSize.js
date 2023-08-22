import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [size, setSize] = useState(100);

    const updateTitle = () => {
        console.log("update index", titleIndex + 1);
        setTitleIndex(titleIndex + 1);
    };

    const updateSize = () => {
        setSize(size + 20);
    };

    useEffect(() => {
        setTimeout(updateTitle, 1000);
    }, [titleIndex]);

    return (
        <div>
            <button onClick={updateSize}>Change size</button>
            <div className="box" style={{ width: size, height: size }}>
                {titleIndex}
            </div>
        </div>
    );
}

export default App;
