import urllib from "urllib";

$(document).ready(function () {
    $(".div").click(function () {
        $(this).css("background-color", "#f39c12");
    });

    // $.get("http://data.nba.net/10s/prod/v1/2016/players.json", function(data) {
    //   // Log the results to the console
    //   console.log(data);
    // }).fail(function(error) {
    //   console.error("Error fetching NBA data:", error);
    // });
});

urllib.request(
    "http://www.omdbapi.com/?apikey=7d97a61d&t=the_lion_king",
    function (err, response) {
        console.log(response.toString());
    }
);
