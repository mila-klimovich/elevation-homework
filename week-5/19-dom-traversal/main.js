$(".remove").on("click", function () {
    alert($(this).closest(".post").data().id);
});

// $("button").on("click", function () {
//     let relevantInputValue = $(this).closest("div").find("input").val();
//     alert(relevantInputValue);
// });

// $("button").on("click", function () {
//     let correctSpanText = $(this).closest("div").find("span").text();
//     console.log(correctSpanText);
// });

$("button").on("click", function () {
    console.log($(".container").find("p").text());
});