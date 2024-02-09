// setTimeout(function() {
//     console.log("Timer")
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked");
// });

// Event listener with closures
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").
  addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}
attachEventListener();