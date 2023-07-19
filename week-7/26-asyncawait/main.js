const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521";

// const fetchData = function () {
//     $.get(API_URL, function (res) {
//         console.log(res.items[0]);
//     });
// };

const fetchData = async function () {
    let data = await $.get(API_URL) 
        console.log(data.items[0]);
};

fetchData();

// const fetchData1 = async function (surname) {
//     let people = await Person.find({lastName: surname})
//         console.log(people)
// };

// fetchData1();

//good example!
class ApiManager {
    constructor(stocksAPI, renderer) {
        this.stocksAPI = stocksAPI;
        this.renderer = renderer;
    }

    async fetchStockData(ticker) {
        let stockData = await $.get(`${this.stocksAPI}/${ticker}`);
        this.renderer.render(stockData);
    }
}

//bad example!
// const getData = async function () {
//     let data = await $.get("/data");
//     return data;
// };

// const result = getData();
//The rule says that all async functions return a promise, no matter what - therefore the value of result will be a Promise, and not the result from the GET request, even though we used await. The await only applies to the scope of the function.


//perfect example
const loadBook = async function (title) {
    let bookISBN = await $.get("/titleAPI/" + title);
    let bookData = await $.get("/bookApi/" + bookISBN);

    render(bookData);
};

loadBook();
//this is a perfect usecase for async / await - the bookApi does depend on the titleAPI to finish, so the second request does need to wait for the first to finish. Excellent.