// Credits: Akshay Saini
// Example 1
// let object = {
//     name: 'Gary',
//     city: 'Bareilly',
//     getIntro: function() {
//         console.log(this.name + " from " + this.city);
//     }
// }

// let object2 = {
//     name: 'Larry',
// }

// object2.__proto__ = object;

// console.log(object2.name);
// console.log(object2.city);
// object.getIntro();
// object2.getIntro();

// Example 2
Function.prototype.mybind = function() {
    console.log(`Since function.prototype will be parent of every function, hence every function can
     access mybind now`);
}

function fun() {

}

function fun2() {
    
}

fun.mybind();
fun2.mybind();
