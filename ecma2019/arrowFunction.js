//old version
function square(x) {
  return x*x;
}

//new version
const sq = x => x*x;

console.log(sq(3));

const arr = ['1', '3', '2', '4'];

const res = arr
  .map(e => parseInt(e))
  .filter(e => e % 2)
  .reduce((max, value) => Math.max(max, value), 0);

console.log(res);