// Concept 1 - using var
// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }
// var close = outer();
// close();

// Concept 2 - using let
// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
// }
// var close = outer();
// close();

// Concept 3 - using function parameter
// function outer(b) {
//     function inner() {
//         console.log(a, b);
//     }
//     let a = 10;
//     return inner;
// }
// var close = outer("Hello world");
// close();


// Concept 4
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var close = outest()("hello world")
close();