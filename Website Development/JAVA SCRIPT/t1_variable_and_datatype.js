// -----------------------------
// JavaScript Data Types Example
// -----------------------------

var x = 10;
//var x = 20; // allowed ❌ (can cause bugs)

let count = 1;
count = 2; // ✅ allowed
// let count = 3; ❌ error

const PI = 3.14;
// PI = 3.15 ❌ error

// 1. Number → for integers and decimals
let age = 20;
let price = 99.99;
console.log("Number:", age, price);

// 2. String → text inside quotes
let name = "Ashwin";
console.log("String:", name);

// 3. Boolean → true or false
let isLoggedIn = true;
console.log("Boolean:", isLoggedIn);

// 4. Undefined → variable declared but not assigned
let x;
console.log("Undefined:", x);

// 5. Null → intentional empty value
let data = null;
console.log("Null:", data);

// 6. BigInt → very large integers (add 'n' at end)
let bigNumber = 123456789012345678901234n;
console.log("BigInt:", bigNumber);

// 7. Symbol → unique value, mainly used as object keys
let id = Symbol("uniqueID");
console.log("Symbol:", id);

// 8. Object → key-value pair (non-primitive type)
let person = {
    name: "Ashwin",
    age: 19
};
console.log("Object:", person);

// Array → special type of object
let numbers = [10, 20, 30];
console.log("Array (Object):", numbers);

// Function → also an object type
function greet() {
    console.log("Hello from function!");
}
greet(); // calling the function
