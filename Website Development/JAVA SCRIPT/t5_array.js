// -------------------------------------------------------------
// WHAT IS AN ARRAY?
// An array is a collection of values stored inside square brackets [ ].
// Example: let arr = [10, 20, 30];
// -------------------------------------------------------------

let exampleArray = [10, 20, 30];
console.log("Array Example:", exampleArray);


// -------------------------------------------------------------
// SINGLE-DATATYPE ARRAY (all items are same datatype)
// -------------------------------------------------------------

let numberArray = [1, 2, 3, 4, 5];
console.log("Single Datatype Array:", numberArray);


// -------------------------------------------------------------
// MULTI-DATATYPE ARRAY (items are different datatypes)
// -------------------------------------------------------------

let mixedArray = ["Ashwin", 21, true, 5.5];
console.log("Multi Datatype Array:", mixedArray);


// -------------------------------------------------------------
// ARRAY INDICES
// Indices are position numbers of items (start from 0).
// arr[0] → first element
// arr[1] → second element
// -------------------------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];
console.log("Index 0:", fruits[0]); // Apple
console.log("Index 1:", fruits[1]); // Banana
console.log("Index 2:", fruits[2]); // Mango


// -------------------------------------------------------------
// LOOPS IN ARRAY
// -------------------------------------------------------------

// 1️⃣ Classic for loop
console.log("For Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2️⃣ for-of loop (easy method to access each item)
console.log("For-of Loop:");
for (let item of fruits) {
  console.log(item);
}


// -------------------------------------------------------------
// IMPORTANT ARRAY METHODS
// -------------------------------------------------------------

let animals = ["Dog", "Cat", "Horse"];

console.log("Array Methods:");

// .push() → adds at end
animals.push("Cow");
console.log("After push:", animals);

// .pop() → removes last element
animals.pop();
console.log("After pop:", animals);

// .shift() → removes first element
animals.shift();
console.log("After shift:", animals);

// .unshift() → adds at beginning
animals.unshift("Lion");
console.log("After unshift:", animals);

// .indexOf() → finds index of an item
console.log("Index of 'Cat':", animals.indexOf("Cat"));

// .includes() → checks if item exists
console.log("Includes 'Dog'?:", animals.includes("Dog"));

// .join() → converts array to string
console.log("Join:", animals.join(" - "));

// .slice(start, end) → makes a copy part of array
console.log("Slice (0–2):", animals.slice(0, 2));

// .splice(start, deleteCount) → removes/replaces items
animals.splice(1, 1); // remove 1 item at index 1
console.log("After splice:", animals);
