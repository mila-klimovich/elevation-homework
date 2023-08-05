console.log("Hello world!");

class Human {
    constructor(name) { 
        this.name = name; 
    }
}

const x = new Human("Mike");

console.log(x.name);

const enemies = [{ e: "Plastic" }, { e: "Cigarettes" }, { e: "The Man" }];

for (let enemy in enemies) {
    console.log(enemy.e);
}