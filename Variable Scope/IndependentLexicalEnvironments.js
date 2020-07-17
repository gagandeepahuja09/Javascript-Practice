makeCounter = () => {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1());  // Output: 0
alert(counter1());  // Output: 1
alert(counter2());  // Output: 0
alert(counter2());  // Output: 1

/*

Reason: Both counter1 and counter2 have different function calls, hence they have their own separate lexical environments. 

*/
