import React, { useState } from "react";

export default function ExerciseTwo() {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleFruitChange = (e) => {
        setFruit(e.target.value);
        console.log(`${name} selected ${e.target.value}`);
    };

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={ handleFruitChange }
                value={fruit}
            >
                <option value="mango">mango</option>
                <option value="watermelon">watermelon</option>
                <option value="avocado">avocado</option>
            </select>
        </div>
    );
};

