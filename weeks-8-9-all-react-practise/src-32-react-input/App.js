import "./App.css";
import React from "react";
import InputTest from "./components/InputTest";
import ExerciseOne from "./components/Exercise1";
import ExerciseTwo from "./components/Exercise2";

const App = () => {

    return (
        <div>
            <InputTest />
            <hr />
            <ExerciseOne />
            <hr />
            <ExerciseTwo /> 
        </div>
    );
};

export default App;
