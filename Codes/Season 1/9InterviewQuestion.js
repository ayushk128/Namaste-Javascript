// function x() {
//     var i = 1;
//     console.log(i);
//     setTimeout(function() {
//         console.log(i);
//     }, 3000)
//     i = 10;
//     console.log("Ayush")
// }

// x();

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i)
//         }, i * 1000);
//     }
// }
// console.log("Namaste")
// x();

// function x() {
//     for(let i = 1; i <= 10; i++) {
//         setTimeout(function() {
//             console.log(i)
//         }, i * 1000);
//     }
// }
// console.log("Namaste")
// x();

function x() {
  for (let i = 1; i <= 10; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
console.log("Namaste");
x();
