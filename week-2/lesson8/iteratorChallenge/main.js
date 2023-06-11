const myObject = {
  [Symbol.iterator]() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    console.log(randomNumbers);
    
    const evenNumbers = randomNumbers.filter(num => num % 2 === 0);

    let index = 0;

    return {
      next() {
        if (index < evenNumbers.length) {
          return { value: evenNumbers[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let x of myObject) {
  console.log(x);
}
