import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";

const App = () => {
    const [data, setData] = useState({
        user: "Robyn",
        store: [
            {
                item: "XSPS Pro Player",
                price: 800,
                discount: 0.2,
                hottest: false,
            },
            {
                item: "Gizem Backwatch",
                price: 230,
                discount: 0.6,
                hottest: false,
            },
            {
                item: "Surround Sound Pelican",
                price: 3099,
                discount: 0.05,
                hottest: true,
            },
        ],
        shouldDiscount: true,
        currentPage: "Landing",
    });

    const togglePages = () => {
        setData((prevData) => ({
            ...prevData,
            currentPage:
                prevData.currentPage === "Landing" ? "Home" : "Landing",
        }));
    };

    return (
        <div>
            {data.currentPage === "Landing" ? (
                <Landing user={data.user} store={data.store} />
            ) : (
                <Home store={data.store} shouldDiscount={data.shouldDiscount}/>
            )}
            <button onClick={togglePages}>Change page!</button>
        </div>
    );
};

export default App;
