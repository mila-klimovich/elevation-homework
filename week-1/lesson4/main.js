const changeArray = function(arr){
  let innerArray = arr
  innerArray[0] = 50
}

const numbers = [1, 2, 3]

changeArray(numbers)
console.log(numbers) // prints [50, 2, 3]

const meow = function(){
    console.log("Meow")
}

const woof = function(){
    console.log("woof")
}


const getAnimalSoundFunc = function(animal){
    if(animal=="cat"){
            return meow
        }
    if(animal=="dog"){
            return woof
    }
}

getAnimalSoundFunc("cat")() //will print meow

greet() //works without a problem
// greetExpression() //throws an error

function greet(){
  console.log("Hello there, from the wild, wild West")
}

const greetExpression = function(){
  console.log("Uh oh")
}


const person = {
  name: "Julius",
  speak: function(food) {
    console.log("I like " + food)
  }
}

console.log(person.name) //you know what this will do
person.speak("cheese toast") //and this? Try it out!


function isEven(number){
    if (number % 2 == 0){
        return true
    }
    return false
}

console.log(isEven(7));


function isEvenNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
        console.log(numbers[i]);
        }
    }
}

isEvenNumbers([1, 2, 3, 4]);


function checkExists(array, number){
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number){
        return true;
        }
    }
    return false;
}

console.log(checkExists([1, 2, 3], 5));


const calculator = {
    add: function(number1, number2){
        return number1 + number2;
    },
    subtract: function(number1, number2){
        return number1 - number2;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


function makeRegal(name){
    return "His Royal Highness " + name;
}

function increaseByNameLength(money, name){
    return money * name.length
}

const turnToKing = function(name, money){
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);
    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"



people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const getSummary = function(person){
  let summary = ""; //modify the summary string with the person parameterreturn summary
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; 
  summary += capitalize(person.profession);
  summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}. `;
  summary += capitalize(person.name);
  summary += ` loves to say "${capitalizeFirstLetter(person.catchphrase)}".`
  return summary;
}

const capitalize = function(str){
  let words = str.split(" ");
  let capitalizedWords = [];

  for (let word of words) {
    let capitalizedWord = word[0].toUpperCase() + word.slice(1); 
    capitalizedWords.push(capitalizedWord);
  }

  let capitalizedStr = capitalizedWords.join(" "); 

  return capitalizedStr;
}

const getAge = function (age) {
    if (age < 21) {
        return "underage"
    } else if (age > 55) {
        return "55+"
    } else {
        return age
    }
}

const capitalizeFirstLetter = function(str) {
    let capitalizedStr = "";
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr;
}

for (i = 0; i < people_info.length; i++) {
    console.log(getSummary(people_info[i]));
}



const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const countWords = function(sentence){
  const cleanSentence = cleanText(sentence);
  const words = cleanSentence.split(" ");
  
  for(let word of words){
    addToCounter(word)
  }
};

const addToCounter = function(word){
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
}

const cleanText = function(sentence){
  return removeSpecialChars(sentence).toLowerCase();
}

const removeSpecialChars = function(sentence){
  for (char of specialChars) {
    sentence = sentence.split(char).join(""); 
  }
  return sentence; 
}

countWords(story);
console.log(wordCounts);