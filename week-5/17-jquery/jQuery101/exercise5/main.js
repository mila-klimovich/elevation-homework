const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" },
];

for (let fruit of fruits) {
    $("#basket").append(`<div class="${fruit.color}">${fruit.name}</div>`);
}

$("#colors span").each(function () {
    let spanElement = $(this);

    spanElement.addClass("picker");
    spanElement.css("background-color", spanElement.data("color"));

    $("#colors span").on("click", function () {
    let spanElement = $(this);
    $(".box").css("background-color", spanElement.data("color"));
});
});    
