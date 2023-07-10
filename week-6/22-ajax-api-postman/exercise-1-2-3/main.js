
const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data.items[0].volumeInfo.title);
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};

fetch(9780575087057);
fetch(9782806269171);
fetch(1440633908);
fetch(9781945048470);
fetch(9780307417138);

const fetchTwoParams = function (queryType, queryValue) {
    let url;

    if (queryType === "isbn") {
        url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`;
    } else if (queryType === "title") {
        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${queryValue.replace(/ /g, "+")}`;
    } else {
        console.log("Invalid query type");
        return;
    }

    $.ajax({
        method: "GET",
        url: url,
        success: function (data) {
            if (data.items && data.items.length > 0) {
                console.log(
                    `Book ${data.items[0].volumeInfo.title} by ${data.items[0].volumeInfo.authors[0]}, isbn: ${data.items[0].volumeInfo.industryIdentifiers[0].identifier}`
                );
            } else {
                console.log("No results found");
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};

fetchTwoParams("isbn", 9789814561778);
fetchTwoParams("title", "How to Win Friends and Influence People");
