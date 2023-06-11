const counter = {
  count: 0,

  updateCounter: function () {
    this.count += 1;
  }
};

counter.updateCounter();
counter.updateCounter();
counter.updateCounter();

alert(counter.count);

// const cat = {
//   makeNoise: function () {
//     alert(this.noise);
//   },
//   noise: "Meow!"
// };

// const dog = {
//   makeNoise: cat.makeNoise,
//   noise: "Woof!"
// };

// cat.makeNoise();
// dog.makeNoise();

const makeNoiseFunction = function () {
  alert(this.noise);
}

const cat = {
  makeNoise: makeNoiseFunction,
  noise: "Meow!"
};

const dog = {
  makeNoise: makeNoiseFunction,
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise();