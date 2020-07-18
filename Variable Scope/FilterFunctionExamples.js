/*
  arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
  arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
*/

function inBetween(a, b) {
  return function(x) {
    return (x >= a && x <= b);
  }
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  }
}


/* sort byField

users.sort(byField('name'));
users.sort(byField('age'));

*/

byField(field) {
  (a, b) => return a[field] > b[field] ? 1 : -1;
}
