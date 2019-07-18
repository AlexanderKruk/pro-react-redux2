// const animal = {
//   say: function() {
//     console.log(this.name, 'goes', this.voice);
//   }
// }

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
}

// function createAnimal(name, voice) {
//   const result = Object.create(animal);
//   result.name = 'dog';
//   result.voice = 'woof';
//   return result;
// }

const dog = new Animal('dog', 'woof');
const cat = new Animal('cat', 'meow');


// const dog = {
//   name: 'dog',
//   voice: 'woof',
// }


// Object.setPrototypeOf(dog, animal);

// const cat = {
//   name: 'cat',
//   voice: 'meow',
// }
// Object.setPrototypeOf(cat, animal);

dog.say();
cat.say();

// 1. Object.setPrototypeOf
// 2. Object.create
// 3. Using new

const objWihoutPrototype = Object.create(null);
