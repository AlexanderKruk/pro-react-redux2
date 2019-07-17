// connectToDb('localhost', 3036);

// old version
// if(count === undefined) {
//   count = 10;
// }

function fetchOrders(count = 10, start = 0) {
  console.log(count, start);
}

fetchOrders();

function findProducts(opts = { minPrice: 10, maxPrice: 20 }) {
  console.log(opts);
}

findProducts({});
