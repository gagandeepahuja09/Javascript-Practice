function makeArmy() {
    let i = 0;
    let shooters = [];
    
    while(i < 10) {
        let shooter = function() {
            console.log(i++);
        };
        shooters.push(shooter);
    }
    return shooters;
} 

let army = makeArmy();

for(let i = 0; i < 10; i++) {
	army[i]();
}

/* 

	Output: 10 10 ... 10
  Reason: army = {
  	function() { console.log(i); },
    function() { console.log(i); },
    ...., function() { console.log(i); },
  }
  
  Since I is not declared inside, so it will check outer-lexical environment.
  In that i has changed to 10
  
  Question: How to get output as 0,1,2,...
  
  * For it we need to declare i locally
    Method 1: for(let i = 0; i < 10; i++) { }
    Method 2: while(i < 10) { let j = i; // Now use j }
    
*/
