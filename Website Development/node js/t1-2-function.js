// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract second number from first
function subtract(a, b) {
    return a - b;
}

// Object containing person details
const person = {
    name: "rohit"
};

// Another way to export a single value (not used here)
// module.exports.singlePerson = person;

// Export multiple values from this module
// These can be accessed in other files using require()
module.exports = {
    add,
    subtract,
    singlePerson: person
};
