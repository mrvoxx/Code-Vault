// -------------------------------------------------------------
// PROMPT — Takes input from user.
// -------------------------------------------------------------
let firstName = prompt("Enter your name:");
console.log("Hello, " + firstName);

// -------------------------------------------------------------
// OPERATOR — A symbol that performs operations on values.
// -------------------------------------------------------------

// 1️⃣ ARITHMETIC OPERATORS
let x = 10;
let y = 3;
console.log("Arithmetic Operators:");
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

// 2️⃣ ASSIGNMENT OPERATORS
let a = 5;
a += 3; // a = a + 3
console.log("Assignment Operator (a += 3):", a);

// 3️⃣ COMPARISON OPERATORS
console.log("Comparison Operators:");
console.log("5 == '5' =", 5 == "5");   // true
console.log("5 === '5' =", 5 === "5"); // false
console.log("5 > 3 =", 5 > 3);

// 4️⃣ LOGICAL OPERATORS
console.log("Logical Operators:");
console.log("true && false =", true && false);
console.log("true || false =", true || false);
console.log("!true =", !true);

// 5️⃣ UNARY OPERATORS
let num = 7;
num++; // increment
console.log("Unary Operator (num++):", num);
console.log("typeof num =", typeof num);

// 6️⃣ TERNARY OPERATOR
let age = 18;
let vote = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log("Ternary Operator:", vote);

// 7️⃣ STRING OPERATOR
let first = "Hello ";
let last = "World";
console.log("String Operator:", first + last);

// 8️⃣ BITWISE OPERATORS
console.log("Bitwise Operators:");
console.log("5 & 1 =", 5 & 1);
console.log("5 | 1 =", 5 | 1);
console.log("5 ^ 1 =", 5 ^ 1);


// -------------------------------------------------------------
// CONDITIONAL STATEMENT — Runs code if condition is true.
// -------------------------------------------------------------
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


// -------------------------------------------------------------
//SWITCH STATEMENT — Executes code based on cases.
// -------------------------------------------------------------
let day = prompt("Enter day number (1, 2, or 3):");

switch (day) {
  case "1":
    console.log("Monday");
    break;

  case "2":
    console.log("Tuesday");
    break;

  case "3":
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
