// Map
// const arr = [2, 4, 6, 8, 10];

// function double(x) {
//     return 2 * x;
// }

// function triple(x) {
//     return 3 * x;
// }

// const doubleArray = arr.map(double);
// console.log(doubleArray);

// const tripleArray = arr.map(triple);
// console.log(tripleArray);

// const binary = arr.map(function (x) {
//     return x.toString(2);
// })
// console.log(binary);

// Filter
// const arr2 = [2, 3, 5, 8, 0];

// function isOdd(x) {
//     return x % 2;
// }

// function isEven(x) {
//     return x % 2 == 0;
// }

// const odd = arr2.filter(isOdd);
// console.log(odd);

// const even = arr2.filter(isEven);
// console.log(even);

// Recude
// const arr3 = [2, 4, 3, 6, 5];
// // Finding sum using traditional way
// function findSum(arr) {
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++) {
//         sum += arr3[i];
//     }
//     return sum;
// }
// console.log(findSum(arr3));

// Using reduce function
// In reduce, the accumulator can be compared to sum = 0, current can be compared with arr[i], and the second parameter give the initial value of accumulator
// const mySum = arr3.reduce(function(accumulator, current) {
//     accumulator = accumulator + current;
//     return accumulator;
// }, 0);

// console.log(mySum);

// function findMax(arr) {
//     let maxi = -1;
//     for(let i = 0; i<arr.length; i++) {
//         maxi = Math.max(maxi, arr[i]);
//     }
//     return maxi;
// }
// console.log(findMax(arr3));

// const maximum = arr3.reduce(function(accumulator, current) {
//     accumulator = Math.max(accumulator, current);
//     return accumulator;
// }, -1)
// console.log(maximum);

const users = [
  { firstName: "Ayush", lastName: "Kumar", age: 24 },
  { firstName: "Manish", lastName: "Kumar", age: 25 },
  { firstName: "Abhinav", lastName: "Majumdar", age: 26 },
  { firstName: "Gaurav", lastName: "Kumar", age: 45 },
  { firstName: "Abhishek", lastName: "Kumar", age: 22 },
];

// const fullName = users.map(function findFullName(elements) {
//     return elements.firstName + " " + elements.lastName;
// });
// console.log(fullName);

// // using arrow function
// const fullName2 = users.map(x => x.firstName + " " + x.lastName);
// console.log(fullName2);

// const output = users.reduce(function (accumulator, current) {
//     if(accumulator[current.age]) {
//         accumulator[current.age]++;
//     }
//     else {
//         accumulator[current.age] = 1;
//     }

//     return accumulator;
// },{})
// console.log(output)

// First name of all the poeple whose age is less than 30
// Solution - Using chanining
const answer = users
  .filter(function (user) {
    if (user.age < 30) return user;
  })
  .map(function (filteredUser) {
    return filteredUser.firstName;
  });
console.log("My answer", answer);

// Solution - Using chanining and arrow function
const answer2 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(answer2);

// using reduce
const answer3 = users.reduce(function(accumulator, current) {
    if(current.age < 30) {
        accumulator.push(current.firstName);
    }
    return accumulator
}, [])
console.log(answer3);
