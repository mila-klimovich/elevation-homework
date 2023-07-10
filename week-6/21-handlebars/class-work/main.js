const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: true },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
        {
            name: "Instagram",
            link: "http://instagram.com",
            socialNetwork: true,
        },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
    ],
};

// const source = $("#menu-template").html();
// const template = Handlebars.compile(source);
// const newHTML = template(menuData);

// append our new html to the page
// $(".menu").append(newHTML);

var classData = {
    classmates: [
        {
            name: "That on gal",
            description: "Always has the ansswer",
            goodStudent: true,
        },
        {
            name: "The weird dude",
            description: "Quick with a smile",
            goodStudent: false,
        },
        { name: "Taylor", description: "Just Taylor", goodStudent: false },
    ],
};

const source = $("#classmates-template").html();
const template = Handlebars.compile(source);
const newHTML = template(classData);

$(".class").append(newHTML);
