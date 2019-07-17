const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27,
  role: 'admin'
};

// const firstName = person.firstName;
// const lastName = person.lastName;

const { name: { first: firstName, last: lastName } } = person;
console.log(firstName, lastName);

const { permissions: { role= 'user' } = {} } = person;
console.log(role);

function connect({ 
  host = 'localhost',
  port = 12345,
  user = 'guest'} = {}) {
  console.log(host, port, user);
}

// connect({
//   host: 'localhost',
//   port: 1829,
//   user: 'peter'
// });

// connect();

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
}

const { duck, ...otherAnimals } = dict;

console.log(duck, otherAnimals);