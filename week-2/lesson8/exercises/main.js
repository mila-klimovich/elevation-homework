// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       this.hungry = false;
//       alert('Im no longer hungry!')
//     }
//   }
// }  

// person.feed() //should alert "I'm no longer hungry"



// const pump = function (amount) {
//   this.liters += amount;
//   console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump,
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump,
//   }
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);



// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {
//   fly: function (fuel) {
//     if (fuel < 2) {
//       return 'on the ground!';
//     }
//     else {
//       return 'flying!';
//     }
//   }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly(0));

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly(0));

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());



// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins: function (number) {
//   this.coinCount -= number;
// }
// };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



// const revealSecret = function () {
//   return this.secret;
// };

// const shoutIt = function (person, func) {
//   person.revealItAll = func;
//   const result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

// const avi = {
//   name: "Avi",
//   secret: "Im scared of snakes!"
// };

// const narkis = {
//   name: "Narkis",
//   secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);

// Read over it, then complete the makeDrink method so that it:
// Only allows you make a drink if it’s a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don’t make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink

const coffeeShop = {
  beans: 40,
  money: 20,
  beanPrice: 0.5,
  

  drinkRequirements: {
    latte: { beanNeeded: 10, price: 5},
    americano: { beanNeeded: 5, price: 2},
    doubleShot: { beanNeeded: 15, price: 8},
    frenchPress: { beanNeeded: 12, price: 6},
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we dont make " + drinkType);
      return false;
    } else if (this.beans < this.drinkRequirements[drinkType].beanNeeded) {
      console.log("Sorry, we're out of beans");
      return false;
    } else {
      console.log("Here's your " + drinkType);
      this.beans -= this.drinkRequirements[drinkType].beanNeeded;
      console.log(this.beans);
      return true;
    }
  },
   
  buyBeans: function (numBeans) {
    let cost = numBeans * this.beanPrice;
    if (this.money < cost) {
      console.log("Not enough money");
    } else {
    this.money -= cost;
    this.beans += numBeans;  
    console.log(this.beans);
    }
  }, 

  buyDrink: function(drinkType) {
    if (this.makeDrink(drinkType)) {
      this.money += this.drinkRequirements[drinkType].price;
      console.log(`Making ${drinkType} for ${this.drinkRequirements[drinkType].price}$`);
    }
  }
  }
  

// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
// coffeeShop.buyBeans();
// coffeeShop.buyDrink("americano");