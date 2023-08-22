import React from "react";

function Item({ item, shouldDiscount }) {
const { item: itemName, price, discount, hottest } = item;
const newPrice = Math.round(shouldDiscount ? price * (1 - discount) : price);

    return (
        <div>
            {item.item}: ${newPrice}
        </div>
    );
}

export default Item;