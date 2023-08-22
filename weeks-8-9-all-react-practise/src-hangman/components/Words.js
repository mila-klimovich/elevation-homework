
function RandomWord() {

    let wordsArray = [
        "javascript",
        "god",
        "tree",
        "paper",
        "gobabygogo",
        "moon",
        "hebrew",
        "elevation",
        "brodetsky"
    ];

    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}

export default RandomWord;
