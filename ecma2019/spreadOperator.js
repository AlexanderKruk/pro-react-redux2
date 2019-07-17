
const arr = [1, 2, 3];
const arr2 = [4, 7, 1];

// old version
const res = Math.max.apply(Math, arr);

// new version

const res2 = Math.max(10, ...arr, 5, ...arr2);
console.log(res, res2);

const shallowCopy = [...arr, ...arr2, 41];
console.log(shallowCopy);