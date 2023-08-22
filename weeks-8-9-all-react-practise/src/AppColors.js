import { useState, useEffect } from "react";
import "./App.css";
import getColors from "./components/getColors";

function App() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [titles, setTitles] = useState([]);

    const updateTitle = () => {
        setTitleIndex(titleIndex + 1);
    };

    useEffect(() => {
        const getData = async function(){
            let colors = await getColors()
            setTitles(colors)
        }
            getData()
    },[]);

    useEffect(() => {
        setTimeout(updateTitle, 1000);
    }, [titleIndex]);

    return (
        <div>
            <div className="box" style={{ width: 100, height: 100 }}>
                {titles[titleIndex]}
            </div>
        </div>
    );
}

export default App;
