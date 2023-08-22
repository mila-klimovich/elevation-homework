import React from "react";
import { useState } from "react";
import Hot from "./Hot";
import Cold from "./Cold";

const SpotCheck4 = () => {
    const [temperature, setTemperature] = useState("hot");
    const toggleTemperature = () => {
        setTemperature(temperature === "hot" ? "cold" : "hot");
    };
    return (
        <div className="SpotCheck4">
            {temperature == "hot" ? <Hot /> : <Cold />}
            <button onClick={toggleTemperature}>Change Temp!</button>
        </div>
    );
};

export default SpotCheck4;
