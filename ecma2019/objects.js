const x = 10;
const y = 30;

const point = {
  x: x,
  y: y,

  draw: function() {

  }
};

const p  = {
  x, y,
  draw(ctx) {

  }
}

//  console.log(point, p);

 const prefix = '_blah_';

 const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
 };

//  console.log(data);

const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

const res = Object.assign({}, defaults, opts);
// console.log(res);

const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');
shallowCopy.friends.pop();

console.log(person);