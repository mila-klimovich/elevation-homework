import moment from "moment";
import urllib from "urllib";

let timeNow = new Date();
console.log(timeNow);

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017


// urllib.request(
//     "http://data.nba.net/10s/prod/v1/2016/players.json",
//     function (err, response) {
//         console.log(response.toString());
//     }
// );

urllib.request(
    "http://www.omdbapi.com/?apikey=7d97a61d&t=the_lion_king",
    function (err, response) {
        console.log(response.toString());
    }
);

