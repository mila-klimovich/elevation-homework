// issue with dynamically added elements
// const addDiv = function() {
//   $("body").append("<div class=box></div>")
// };

// $("button").on("click", function() {
//   addDiv()
// });

// $(".box").on("click", function() {
//   alert("hi")
// });


// fixing it like below will create too many allerts!
// const addDiv = function () {
//     $("body").append("<div class=box></div>");

//     $(".box").on("click", function () {
//         alert("hi");
//     });
// };

// $("button").on("click", function () {
//     addDiv();
// });

//good way to fix it
const addDiv = function () {
    $("body").append("<div class=box></div>");
};

$("button").on("click", function () {
    addDiv();
});

$("body").on("click", ".box", function () {
    //Instead of adding the listener to .box we’re adding it to body, added another argument to the on function. This means "For any element with a class of box inside of body, add a click listener to it." the extra argument - the “.box” - is called a selector and it restricts the click event to only the .box descendants of body.
    alert("hi");
});