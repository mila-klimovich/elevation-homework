const circleUtilities = require("./circleUtils");

const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"

//the calcCircleArea function uses pi in its calculation - we have not defined pi in the shapesApp.js module - why does the above code still work? Closure! Inside the circleUtils file - which again, is a module - the calcCircleArea function accesses pi. Since this is a function accessing an external function’s variables - we have closure! The value of pi is kept from within the calcCircleArea function.

//from within the shapesApp module (as it is written above), can you access title? Nope, because we did not export it from the circleUtils module.

const dbName = "SQL_DB_1102";
const dbPassword = "e3!accT";

module.exports = {
    dbName: dbName,
    dbPassword: dbPassword,
};

console.log(module.exports);