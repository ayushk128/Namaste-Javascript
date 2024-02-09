// Concept 1 - Data Hiding
// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count)
//     }
// }

// var counter1 = counter()
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

// Concept 2 - Scalability and Anonymous Function
function Counter () {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();
counter1.decrementCounter();