function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

class Graph {
  addNode() {
    console.log('Node added');
  }
}

const PI = 3.1415;

export {
  add, subtract as s, multiply, divide, PI
};

export default Graph;