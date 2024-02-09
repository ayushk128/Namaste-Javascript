// Function Statement
// a();
// function a() {
//     console.log("a called");
// }

// Function expression
// console.log(b);
// b();   // It will result to an error
// var b = function() {
//     console.log("b called");
// }

// Anonymous Function
// function () {
//     console.log("Anonymous Function");
// }

// Named function expression
// var c = function xyz() {
//     console.log("Named function expression");
//     console.log(xyz);
// }
// c();
// xyz(); //Error

// Difference between Parameters and arguments
// var fun = function(parameter1, parameter2) {
//     console.log(parameter1, parameter2);
// }

// fun("Argument1", "Argument2");

// First class functions
var b = function(param1) {
    console.log(param1);
}

b(function() {
})

function xyz() {
    console.log("xyz");
}
b(xyz);