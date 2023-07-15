const getRandomWord = function () {
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
};

// let p = getRandomWord();
// console.log(p); will print promise object

// getRandomWord().then((word) => {
//     console.log(word);
// });

let randomWordPromise = getRandomWord();

randomWordPromise.then((word) => {
    console.log(word);
});

//to write a function that returns a promise
function getData() {
    return new Promise((resolve, reject) => {
        fetch("https://example.com/data")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Request failed");
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}