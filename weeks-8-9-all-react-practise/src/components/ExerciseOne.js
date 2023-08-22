import React, { useState, useEffect } from "react";

export default function ExerciseOne() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts or when the dependency array changes
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{formattedTime}</p>
        </div>
    );
}
