const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!",
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one.",
    },
];

const render = function () {
    for (let post of posts) {
        let postBox = $(`<div class='post-box'><p><b>${post.name }</b>: ${post.text}</p></div>`);
        $("#timeline").append(postBox);
    }
};

$("button").on("click", function () {
    let nameInput = $("#inputName");
    let wishInput = $("#inputWish");
    let timeline = $("#timeline");

    let name = nameInput.val();
    let wish = wishInput.val();

    timeline.empty();

    posts.push({ name: name, text: wish });
    nameInput.val("");
    wishInput.val("");

    render();
});

$("#timeline").on("click", ".post-box", function () {
    $(this).remove();
});