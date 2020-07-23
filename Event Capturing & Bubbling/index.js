// Credits: Akshay Saini

// Cycle: First all capture ones, the all bubble ones.

// document.querySelector('#grandparent')
// .addEventListener('click', (e) => {
//     console.log('GP');
// }, true);   // capture

// document.querySelector('#parent')
// .addEventListener('click', (e) => {
//     console.log('P');
// }, false);  // bubble

// document.querySelector('#child')
// .addEventListener('click', (e) => {
//     console.log('C');
// }, true);   // capture


// Stopping propagation at any specific point

document.querySelector('#grandparent')
.addEventListener('click', (e) => {
    console.log('GP');
}, true);   // capture

document.querySelector('#parent')
.addEventListener('click', (e) => {
    console.log('P');
}, false);  // bubble

document.querySelector('#child')
.addEventListener('click', (e) => {
    console.log('C');
    e.stopPropagation();
}, true);   // capture
