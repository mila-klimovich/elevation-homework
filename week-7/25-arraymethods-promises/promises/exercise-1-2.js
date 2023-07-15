function getWord() {
    return fetch("https://random-word-api.herokuapp.com/word").then(
        (response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: " + response.status);
            }
        }
    );
}

function getBook(word) {
    return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    ).then((response) => {
        if (response.ok) {
            return response.json().then((response) => {
                $("body").append(
                    `<div>${response.items[0].volumeInfo.title}</div>`
                );
            });
        } else {
            throw new Error("Error: " + response.status);
        }
    });
}

function getGif(word) {
    return $.get(
        `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=AyNkVPxUIN6Mswv4HU831efWTosug0g1&limit=5`
    ).then((data) => {
        if (data.data.length > 0) {
            const gifUrl = data.data[0].images.original.url;
            $("body").append(`<img src="${gifUrl}" alt="GIF">`);
        } else {
            console.log("No GIF found for the word:", word);
        }
        return data;
    });
}

getWord()
    .then((wordParam) => {
        word = wordParam;
        let book = getBook(word);
        let gif = getGif(word);
        return Promise.all([book, gif]);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
