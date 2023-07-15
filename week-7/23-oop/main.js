class Animal {
    constructor(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.children = [];
    }

    giveBirth(name) {
        this.children.push(name);
    }
}

const dog = new Animal("Matt", 4);
console.log(dog.name);

class Human {
    constructor(name, age, isFriendly) {
        this.name = name;
        this.age = age;
        this.isFriendly = isFriendly;
    }
}

const person = new Human("Mila", 33, true);

console.log(`${person.name}, is ${person.age} yo, is ${person.isFriendly ? 'friendly' : 'not friendly'}`);

const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]


class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
        Vehicle.carsSold++; //we are changing a class-level property each time the constructor is called; i.e each time a new Vehicle is created
        
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney() {
        console.log("We've made " + Vehicle.carsSold * 30000 + " dollars");
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive");
        }
        this._speed = speed;
    }

    get speed() {
        return this._speed;
    }

    //  if a class attribute has the same name as the set's method name, you will be faced with an infinite loop:
    // set x(value) {
    //     this.x = value;
    // }

    get fuel() {
        return this._fuel;
    }

    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
            return console.log("Speed must be greater than 0 and less than 150");
        }
        this._fuel = fuel;
    }

}

Vehicle.carsSold = 0;

const mercedes = new Vehicle(1, 2, 3003, 100);
const bmw = new Vehicle(3, 4, 2500);

Vehicle.getInfo(); // Output: We've sold 2 vehicles.
Vehicle.calculateMoney();

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10;
console.log(c.speed);
console.log(mercedes.fuel);

class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animals {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const citty = new Animals("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(citty); // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"