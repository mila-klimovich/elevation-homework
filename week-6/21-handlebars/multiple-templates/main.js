const renderFirst = function () {
    const source = $("#first-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ text: "This gets rendered" });
    $("body").append(newHTML);
};

const renderSecond = function () {
    const source = $("#second-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ moreText: "This also gets rendered" });
    $("#special").append(newHTML);
};

renderFirst();
renderSecond();

const anumalsData = {
    animals: [
        "Rabbit",
        "Giraffe",
        "Kangaroo",
        "Whale",
        "Seagull",
        "Caterpie"
    ],
};

const renderAnimals = function () {
    const source = $("#animals-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template(anumalsData);
    $("#animals").append(newHTML);
}

renderAnimals();

const languagesData = {
    languages: ["French", "Spanish", "Togolese", "Javascript", "Uruk"],
};

const renderLanguages = function() {
    const source = $("#languages-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template(languagesData);
    $("#languages").append(newHTML);
};

renderLanguages();