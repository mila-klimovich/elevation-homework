import Article from "./Article";

function Wardrobe() {
    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" },
    ];

    return wardrobe.map((w) => <Article info={w} color={w.color + w.type}/>);

}

export default Wardrobe