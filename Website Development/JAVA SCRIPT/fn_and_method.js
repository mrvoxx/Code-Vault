// -------------------------------------------------------------
// WHAT IS A FUNCTION?
// A function is a reusable block of code that performs a task
// and runs only when it is called.
// -------------------------------------------------------------

function greet() {
  console.log("Hello from a normal function!");
}
greet();


// -------------------------------------------------------------
// WHAT IS A METHOD?
// A method is a function that belongs to an object or array.
// Example: array.push(), string.toUpperCase()
// -------------------------------------------------------------

let text = "hello";
console.log("Method Example (toUpperCase):", text.toUpperCase());


// -------------------------------------------------------------
// ARROW FUNCTION (modern, shorter way to write functions)
// Syntax:  const name = () => { ... }
// -------------------------------------------------------------

const arrowGreet = () => {
  console.log("Hello from an arrow function!");
};
arrowGreet();


// Arrow function with parameters
const add = (a, b) => a + b;
console.log("Arrow Add (5 + 3):", add(5, 3));


// -------------------------------------------------------------
// CALLBACK FUNCTION
// A callback is a function passed as an argument to another function.
// The main function "calls back" the passed function.
// -------------------------------------------------------------

function processUser(callback) {
  console.log("Processing user...");
  callback(); // calling the callback
}

function userDone() {
  console.log("User processed successfully!");
}

processUser(userDone);


// -------------------------------------------------------------
// CALLBACK-BASED ARRAY METHODS
// (forEach, map, filter, reduce)
// -------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5];

console.log("Array Callback Methods:");


// 1️⃣ forEach() — runs a function for each element
numbers.forEach((num) => {
  console.log("forEach:", num);
});


// 2️⃣ map() — creates a new array by applying a function to each item
let doubled = numbers.map((num) => num * 2);
console.log("map (doubled):", doubled);


// 3️⃣ filter() — returns items that satisfy a condition
let even = numbers.filter((num) => num % 2 === 0);
console.log("filter (even numbers):", even);


// 4️⃣ reduce() — reduces array to a single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce (sum):", sum);
