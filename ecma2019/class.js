// function Animal(name, voice) {
//   this.name = name;
//   this.voice = voice;
// }

// Animal.prototype.say = function() {
//     console.log(this.name, 'goes', this.voice);
// }

// const dog = new Animal('dog', 'woof');
// dog.say();

class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(this.name, 'goes', this.voice);
  }
}

class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    this.say();
    this.canFly = canFly;
  }

  say() {
    console.log('Birds don\'t like to talk');
  }
}
// duck -> Bird.prototype ->  
// Animal.prototype -> Object.prototype -> null
const duck = new Bird('Duck', 'quack', true);
duck.say();