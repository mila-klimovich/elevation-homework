//document.getElementById("container") same with $("#container")

//vanilla JS
// document.getElementById("container").style.display = "none";

//jQuery
// $("#container").hide(); //when we select elements with jQuery, we also get methods that can work on the element, on top of the element itself

// const elem = $("#id");
// const elems = $(".class-name");

// const header = $("h1");
// console.log(header);

// console.log(jQuery);
// console.log($);

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1]; //will return everything after the # in selector
//         return document.getElementById(elementId);
//     }
// };

// console.log(myQuery("#my-div"));

// const sayHi = function () {
//     console.log("Hi!");
// };

// const $ = sayHi;

// $(); //prints "Hi!"

// $("h4").css("color", "red"); using the css method* to manipulate the returned array of elements - in other words, we’ve changed all the h4’s colors to red. *The css method takes two arguments: the first is the css property and second is the value

// $("h1").css("background-color", "blue");
// $(".red-div").css("background-color", "red");
// $("li:first-child").css("background-color", "green");
// $("li:last-child").css("background-color", "pink");
// $("#brown-div").css("background-color", "brown");

// $("#b1").addClass("yellow");
// $("#b2").addClass("aquamarine");

// $("#my-input").val(); set or alter the value of an input by passing val an argument.

// $("#my-input").val("Terabyte"); 

// const color = $("div").data().color  
// console.log(color) //prints #2980b9

// const barcode = $("h1").data().barcode;
// const expirationDate = $("h1").data().expirationdate;
// console.log(barcode);
// console.log(expirationDate);

// const data = $("h1").data();
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate);

//EVENTS

// $("button").on("click", function () {
//     alert("clicked!");
// });

// $("button").click(function () {
//     alert("clicked!");
// });

// const clicked = function () {
//     alert("clicked!");
// };

// $("button").on("click", clicked);

// const clicked = function () {
//     alert("clicked!");
// };

// $("button").click(clicked);

// $("#newColor").hover(function () {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
// });

// $("#newColor").hover(function () {
//     $("#newColor").css("background-color", "blue");
// });

//  $("#my-input").val("Terabyte"); 

//  $("button").click(function () {
//     alert($("#my-input").val())
//  });

//  $(".box").hover(
//      function () {
//          $(this).css("background-color", "blue")
//      }
//  );

// const aDynamicDiv = "<div class='mine'>Oh yes</div>";
// const elem = $(aDynamicDiv);
// console.log(elem);

// $("body").append(elem);

// $(".fruits").append('<p class="red">Raspberry</p>');
// $(".fruits").append('<p class="brown">Kiwi</p>');

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")
// const item = $(`<div class=fruit>${text}</div>`);

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

// $(".feedme").on("click", function () {
//     let divCopy = `<div class=feedme>${$(this).html()}</div>`;

//     // console.log(divCopy);
    
//     $("body").append(divCopy); //use template literals and $(this)
// });

// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"];

// for (let name of names) {
//     $("body").append(`<div>${name}</div>`);
// }

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" },
// ];

// for (let name of names) {
//     $("body").append(`<div>${name.first} - ${name.last}</div>`);
// }

// $("p").remove() -- remove all ps from the page

// $("p").remove(".brown") -- only remove ps with a certain class

// $("#plague").hover(function () {
//     $("#plague").remove();
// });

$("button").on("click", function () {
    $("#blogs").append("<div class='blog'>Cool blog</div>");
});

$("#blogs").on("click", ".blog", function () {
    $(this).text("blargh");
});