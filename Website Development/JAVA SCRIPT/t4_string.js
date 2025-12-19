// -------------------------------------------------------------
// WHAT IS A STRING?
// A string is a sequence of characters written inside quotes.
// Example: "Hello", 'World', `Hi`
// -------------------------------------------------------------
let myString = "JavaScript";
console.log("String Example:", myString);


// -------------------------------------------------------------
// IMPORTANT STRING METHODS WITH EXAMPLES
// -------------------------------------------------------------

console.log("String Methods:");

// .length → returns number of characters
console.log("Length:", myString.length);

// .toUpperCase() → converts to CAPITAL letters
console.log("Uppercase:", myString.toUpperCase());

// .toLowerCase() → converts to small letters
console.log("Lowercase:", myString.toLowerCase());

// .slice(start, end) → extracts part of string
console.log("Slice (0–4):", myString.slice(0, 4));

// .includes() → checks if a substring exists
console.log("Includes 'Script':", myString.includes("Script"));

// .replace(old, new) → replaces text
console.log("Replace:", myString.replace("Java", "Type"));

// .charAt(index) → returns character at position
console.log("charAt(2):", myString.charAt(2));

// .trim() → removes spaces from start & end
let spaced = "   hello   ";
console.log("Trim:", spaced.trim());


// -------------------------------------------------------------
// TEMPLATE LITERALS
// A template literal is a string written using backticks (` `)
// instead of normal quotes. They support:
// 1) Multiline strings
// 2) Interpolation
// -------------------------------------------------------------


// -------------------------------------------------------------
// INTERPOLATION
// Interpolation inserts variables inside strings using ${ }.
// -------------------------------------------------------------
let name = "Ashwin";
let age = 20;

let message = `My name is ${name} and I am ${age} years old.`;
console.log("Template Literal + Interpolation:", message);


// Multiline string example
let multiLine = `
This is a
multiline
string.
`;
console.log("Multiline Template Literal:", multiLine);
