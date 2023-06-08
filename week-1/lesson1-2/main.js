console.log("Hello, world!");

// let a = 6;
// let b = a;

// console.log(a); //prints 6
// console.log(b); //prints 6

// b = 2;

// console.log(a); //prints 6
// console.log(b); //prints 2

const firstString = "car";
const secondString = "pet";
const bothStrings = firstString + secondString;
console.log(bothStrings);

const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);

console.log(3 < 5); // will output true
console.log(3 > 5); // will output false
console.log(2 >= 2); // will output true
console.log(1 <= -1); // will output  false
console.log("this string" == "that string"); // will output false

let num;
console.log(3 + num);
console.log(14 % 5);

let startPosition;
let newPosition = (startPosition || 0) + 10;

console.log(newPosition); //prints 10
console.log((5 > 2) && false); 
console.log(!("knife" === "sword")); 
console.log((1 < 2) || (-1 > -1) || !false); 
console.log(""); 
console.log((31 % 5) == "1"); 
console.log(!!true); 
console.log("5th Avenue" != "5th Avenue"); 
console.log(52 !== "52"); 
console.log(undefined || null); 

let a = 3;
let c = 0;
let b = a; //b = 3
b = a; 
c = a; //c = 3
b = c;
a = b;

console.log(a, b, c);


// let username = prompt("What is your username?");
// console.log(username);

let boughtTesla = false;
const yearOfTeslaPurchase = 2016;
let isUSCitizen = false;
let currentYear = 2018;

if (boughtTesla && isUSCitizen && (currentYear - yearOfTeslaPurchase >= 4)) {
  console.log("Would you like an upgrade?")
} else if (isUSCitizen && currentYear - yearOfTeslaPurchase < 4) {
  console.log("Are you satisfied with the car?")
} else if (boughtTesla && !isUSCitizen) {
  console.log("Would you like to move to US?")
} else if (!boughtTesla) {
  console.log("Are you interested in buying one?")
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(1,2);
numbers[3] = 1;
numbers.splice(4,4);
numbers.splice(0, 0, 0);
console.log(numbers);

let p1 = {
    name: "Jill",
    age: 23,
    city: "Tel-Aviv"
}

let p2 = {
    name: "Robert",
    age: 23,
    city: "Ashdod"
}

if(p1.age == p2.age && p1.city == p2.city) {
    console.log("Jill wanted to date Robert")
} else if (p1.city != p2.city) {
    console.log("Jill wanted to date Robert, but couldn’t")
}

let library = {
    books: [
        {
            title: "War and Peace",
            author: "Lev Tolstoy"
        },
        {
            title: "Captain's daughter",
            author: "A.S.Pushkin"
        },
        {
            title: "Demons",
            author: "Fyodot Dostoevsky"
        }
    ],
};
console.log(library);

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i = 0; i < 3; i++) {
    people.push({name: names[i], ages: ages[i]})
};

console.log(people);


for(p in people) {
    console.log(people[p].name + " is " + people[p].ages + " years old");
    // people.push({name: names[i], ages: ages[i]})
};



const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for (p in posts){
    if (posts[p].id == 2){
        posts.splice(p, 1);
    }
}
console.log(posts);



const postsNext = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

    if (postsNext[p].id == 2){
        for (c in postsNext[p].comments) {
            if (postsNext[p].comments[c].id == 3)
            postsNext[p].comments.splice(c, 1);
        }   
    }

console.log(postsNext);



const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (key in dictionary) {
    console.log("Words that begin with "  + key);
    for (i = 0; i < dictionary[key].length; i++) {
        console.log(dictionary[key][i]);
    }
}


const keys = Object.keys(dictionary);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log("Words that begin with " + key);
    const words = dictionary[key];
        for (let j = 0; j < words.length; j++) {
    console.log(words[j]);
  }
}



let x = [ {human: {name: 'Daena', age: 31} } ][0].age;
console.log(x);


const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation').toLowerCase();

if(reservations[name]?.claimed) {
    console.log("Hmm, someone already claimed this reservation");
} else if (reservations[name]){
    console.log("Welcome, " + name);
} else {
    // console.log("You dont have a reservation");
    reservations[name] = { clamed : true };
}

console.log(reservations);


//extension
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const items = kitchen.fridge.items;

if(hasOven && works) {
    for (i in items)
    if (items[i].expiryDate < date) {
       console.log(`Geraldine’s ${items[i].name} expired ${date-items[i].expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`); 
    }
} else if (!hasOven && works) {
    for (i in items)
    if (items[i].expiryDate < date) {
       console.log(`Geraldine’s ${items[i].name} expired ${date-items[i].expiryDate} day ago. Weird, considering her fridge works. Too bad she doesnt have an oven to cook the raddish in.`); 
    }
} else if(hasOven && !works) {
    for (i in items)
    if (items[i].expiryDate < date) {
       console.log(`Geraldine’s ${items[i].name} expired ${date-items[i].expiryDate} day ago. Probably because her fridge doesnt work. Luckily, she has an oven to cook the raddish in. And shell have to pay ${kitchen.fridge.price / 2} to fix the fridge.`); 
    }
} else if(!hasOven && !works) {
    for (i in items)
    if (items[i].expiryDate < date) {
       console.log(`Geraldine’s ${items[i].name} expired ${date-items[i].expiryDate} day ago. Probably because her fridge doesnt work. Too bad she doesn’t have an oven to cook the raddish in. And shell have to pay ${kitchen.fridge.price / 2} to fix the fridge.`); 
    }
}


