let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" },
];

let orangeVeggies = vegetables.filter(v => v.color === "orange");
// console.log(orangeVeggies);

orangeVeggies.forEach(v => console.log(v.name));

let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
];

const increaseSalary = function(p){
    if (p.goodPerformance)
    p.salary+=300;
}

people.forEach(increaseSalary);
people.forEach((p) => console.log(p.salary)); //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

let messagesFromDad = [
    "HI HONEY",
    "HOW WAS SCHOOL??",
    "DID YOU EAT TODAY?",
    "I CAN'T FIND THE REMOTE CONTROL",
];

let calmMessages = messagesFromDad.map((m) => m.toLowerCase());

console.log(calmMessages);

let users = [
    {
        name: "Leanne Graham",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: { lat: "-37.3159", lng: "81.1496" },
        },
    },
    {
        name: "Ervin Howell",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: { lat: "-43.9509", lng: "-34.4618" },
        },
    },
];

let usersShort = users.map((u) => {
    return { name: u.name, city: u.address.city };
});

console.log(usersShort);

let posts = [
    {
        id: 0,
        text: "I'm not here",
        comments: [{ id: 0, text: "support that" }],
    },
    {
        id: 1,
        text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" },
        ],
    },
    {
        id: 2,
        text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" },
        ],
    },
    {
        id: 3,
        text: "Poof",
        comments: [{ id: 0, text: "like magic" }],
    },
];

const findById = id => posts.find(p => p.id === id) //Define a function called findById just like before, We use arrow syntax to have the function receive one parameter, id. The function returns ( => ) whatever posts.find(…) returns. The find method receives an anonymous callback. The callback iterates over every post, p, and finds the one who’s ID matches the given id
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}

const findCommentByID = (postID, commentID) => {
    let post = findById(postID);
    return post.comments.find(c => c.id === commentID);
}
console.log(findCommentByID(1, 0));

let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

if(movies.some(m => m.studio === "Marvel")){
    console.log("Let’s go watch some movies");
} else {
    console.log("Let’s stay home");
}

if(movies.every(m => m.year > 2017)) {
    console.log("Futuristic stuff");
} else {
    console.log("Yawn");
}