// 👉 A module is just a file that contains code for one specific purpose

// Import variables and data from t1-1-variable.js
// require() runs the file and returns whatever is inside module.exports
const module1 = require("./t1-1-variable");

// Import functions and objects from t1-2-function.js
const module2 = require("./t1-2-function");

// Print the exported array of items from module1
console.log(module1.item);

// Print the exported person object from module2
console.log(module2.singlePerson);

// Access and print exported variables from module1
console.log("student name is", module1.student);
console.log("student course is", module1.course);

// Call exported functions from module2 and print their results
console.log("addition is :", module2.add(2, 3));
console.log("subtraction is :", module2.subtract(10, 2));
