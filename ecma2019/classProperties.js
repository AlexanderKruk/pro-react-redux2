// proposal classProperties 3 stage
class Counter {
  count = 0;

  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  }

  static  incrementStep = 2;

  static incrementAll = function(arr) {
    arr.forEach((c) => c.inc());
  }
}

Counter.incrementAll([]);

const cnt = new Counter();
cnt.inc();
setTimeout(cnt.inc, 1000);

// current version
class Counter {

  constructor() {
    this.count = 0;
    this.inc = () => {
      this.count += Counter.incrementStep;
    }
  }
 }

 Counter.incrementStep = 2;
  
 Counter.incrementAll = function(arr) {
   arr.forEach((c) => c.inc());
 }