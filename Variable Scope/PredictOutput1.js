let x = 1;

function f() {
  console.log(x);
  let x = 2;
}

/* 
  Output: Reference Error, cannot access x before initialization
  It will first search locally i.e. innermost lexical environment. There it is declared but it's initialized later.
  If we remove line 5, then output will be 1.
*/
