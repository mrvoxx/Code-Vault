// -----------------------------------------------------------
// LOOP — A structure that repeats code until a condition is met.
// -----------------------------------------------------------


// -----------------------------------------------------------
// 1️⃣ FOR LOOP — Repeats code a fixed number of times using a counter.
// -----------------------------------------------------------
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Value:", i);
}


// -----------------------------------------------------------
// 2️⃣ WHILE LOOP — Repeats code as long as the condition is true.
// -----------------------------------------------------------
console.log("WHILE LOOP:");
let w = 1;
while (w <= 5) {
  console.log("While Loop Value:", w);
  w++;
}


// -----------------------------------------------------------
// 3️⃣ DO-WHILE LOOP — Runs at least once, then repeats while condition is true.
// -----------------------------------------------------------
console.log("DO-WHILE LOOP:");
let d = 1;
do {
  console.log("Do-While Value:", d);
  d++;
} while (d <= 5);


// -----------------------------------------------------------
// 4️⃣ FOR-OF LOOP — Loops through VALUES of an array.
// -----------------------------------------------------------
console.log("FOR-OF LOOP:");
let numbers = [10, 20, 30];
for (let value of numbers) {
  console.log("For-Of Value:", value);
}


// -----------------------------------------------------------
// 5️⃣ FOR-IN LOOP — Loops through KEYS of an object.
// -----------------------------------------------------------
console.log("FOR-IN LOOP:");
let person = { name: "Ashwin", age: 20, city: "India" };

for (let key in person) {
  console.log("Key:", key, "Value:", person[key]);
}
