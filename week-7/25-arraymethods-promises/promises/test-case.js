function getRandomWord () {
    let words = [
        "Bonanza",
        "Elusive",
        "Hindrance",
        "Astute",
        "Polaroid",
        "Phonic",
        "Yonder",
    ];
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
})
}


const getSynonyms = function (word) {
    let thesauraus = {
        Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
        Astute: ["Sharp", "Poignant", "Clever"],
        Azure: ["Blue", "Cyan", "Sky-blue"],
        Bright: ["Luminous", "Brilliant"],
        Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
        Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
        Erode: ["Destroy", "Wear out", "Tarnish"],
        Hindrance: ["Bother", "Disturbance", "Problematic"],
        Phonic: ["Soundful"],
        Ploy: ["Plan", "Ruse"],
        Polaroid: ["Photograph"],
        Yap: ["Bark", "Blab", "Chatter"],
        Yonder: ["There", "Away", "Far", "Afar"],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(thesauraus[word])
    }, 1000);
})
}


const getSentiment = function (word) {
    let wordSentiment = {
        Definitive: 1,
        Sharp: 1,
        Blue: 0,
        Luminous: 1,
        Plethora: 1,
        Slick: -1,
        Destroy: -1,
        Bother: -1,
        Soundful: 0,
        Plan: 0,
        Photograph: 0,
        Bark: -1,
        There: -1,
    };
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(wordSentiment[word]);
    }, 1000);
})
}

const getSentimentDescription = function (sentiment) {
    return sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral";
};


// getRandomWord()
//     .then((word) => {
//         return getSynonyms(word)
//     .then((synonyms) => {
//             if (synonyms.length > 0) {
//         return getSentiment(synonyms[0])
//             .then((sentiment) => {
//                 console.log(
//                     `Random word is ${word}, its synonyms are ${synonyms} and the sentiment is ` + getSentimentDescription(sentiment)
//                 );
//             })
//         } 

//     });
// });

// getRandomWord()
//     .then((word) => {
//         return getSynonyms(word);
//     })
//     .then((synonyms) => {
//         return getSentiment(synonyms[0]);
//     })
//     .then((sentiment) => {
//         const sentimentDescription = getSentimentDescription(sentiment);
//         console.log(sentimentDescription);
//     });

// let word = null;
// let synonyms = null;

// getRandomWord()
//     .then((wordParam) => {
//         word = wordParam;
//         return getSynonyms(word);
//     })
//     .then((synonymsParam) => {
//         synonyms = synonymsParam;
//         return getSentiment(word);
//     })
//     .then((sentiment) => {
//         const sentimentDescription = getSentimentDescription(sentiment);
//         console.log(`The word ${word} has synonyms ${synonyms} 
//         and a ${sentimentDescription} sentiment`);
//     });

let word = null;

getRandomWord()
    .then((wordParam) => {
        word = wordParam;
        let synonymsPromise = getSynonyms(word);
        let sentimentPromise = getSentiment(word);
        return Promise.all([synonymsPromise, sentimentPromise]);
    })
    .then((promiseResults) => { //gets an array of all our resolved values
        // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
        let [synonyms, sentiment] = promiseResults;
        const sentimentDescription = getSentimentDescription(sentiment);
        console.log(
            `The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`
        );
    });