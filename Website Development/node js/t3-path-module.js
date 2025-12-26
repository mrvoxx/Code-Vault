// Import the path module
// path helps us work with file and folder paths
const path = require('path');

// path.sep gives the path separator of the operating system
// Linux / macOS → "/"
// Windows → "\"
console.log(path.sep);

// Create a RELATIVE path
// Relative path means: path starts from the current working directory
const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

// path.basename() returns only the last part of the path
// Here it returns the file name
const base = path.basename(filePath);
console.log(base);

// Create an ABSOLUTE path
// Absolute path means: full path starting from the root of the system
// __dirname gives the directory of the current file
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolutePath);
