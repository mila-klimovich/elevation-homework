// const searchWord = $("#input").val();

// var xhr = $.get(
//     `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=AyNkVPxUIN6Mswv4HU831efWTosug0g1&limit=5`
// );
// xhr.done(function (data) {
//     console.log("success got data", data.data[0].embed_url);
//     $("#iframe").attr("src", data.data[0].embed_url);
// });


const fetch = function () {
const searchWord = $("#input").val();

    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=AyNkVPxUIN6Mswv4HU831efWTosug0g1&limit=5`,
        success: function (data) {
            console.log("success got data", data.data[0].embed_url);
            $("#iframe").attr("src", data.data[0].embed_url);
        },
        error: function (xhr, text, error) {
            console.log(text);
        },
    });
};

// fetch();