let name = 'Joe';
name = 'Bob';
console.log(name);

const pi = 3.14;

const names = ['Peter', 'Bob'];

names.push('Jenny');
console.log(names);

const person = {
  name: 'Joe',
  age: 25
}

person.name = 'Bob';

for (let i=0; i<3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i*100);
}