// First Concept - Hoisting
// getName();
// console.log(x);
// console.log(getName);
// var x = 7;

// function getName() {
//     console.log("Namaste Javascript");
// }
// In case of arrow function - JS will treat it as normal variable and will give error
// var getName = () => {
//     console.log("Namaste Javascript");
// }
// var getName = function () => {
//     console.log("Namaste Javascript");
// }


// Second Concept
// var x = 7;
// console.log(getName);

// function getName() {
//     console.log("Namaste Javascript");
// }

// console.log(getName); -will print the whole function

// Third concept - Call stack concept
var x = 7;
function getName() {
    console.log("Namaste Javascript");
}
getName();
console.log(x);
console.log(getName);