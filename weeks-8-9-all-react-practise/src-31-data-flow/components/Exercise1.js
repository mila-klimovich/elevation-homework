import React, { useState } from "react";

export default function ExerciseOne() {
    const [data, setData] = useState({
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
        ],
        currentImg: 0,
    });

    const shiftImageBack = () => {
        setData((prevData) => ({
            ...prevData,
            currentImg: prevData.currentImg === 0 ? 0 : prevData.currentImg - 1,
        }));
    }; 

    const shiftImageForward = () => {
        setData((prevData) => ({
            ...prevData,
            currentImg:
                prevData.currentImg === prevData.images.length - 1
                    ? prevData.currentImg
                    : prevData.currentImg + 1,
        })); 
    } 

    return (
        <>
            <button onClick={shiftImageBack}>Previous</button>
            <img id="img" src={data.images[data.currentImg]} alt="" />
            <button onClick={shiftImageForward}>Next</button>
        </>
    );
}