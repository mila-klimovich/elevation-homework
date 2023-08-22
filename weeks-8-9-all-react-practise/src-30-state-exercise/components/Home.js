import React from "react";
import Item from "./Item";

function Home({store, shouldDiscount}) {
    return (
        <div>
            <h2>Store</h2>
            {store.map((s) => (
                <Item key={s.item} item={s} shouldDiscount={shouldDiscount} />
            ))}
        </div>
    );
}

export default Home;