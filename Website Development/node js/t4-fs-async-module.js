// Import readFile and writeFile from the File System (fs) module
// fs allows Node.js to read, write, delete, and manage files
const { readFile, writeFile } = require('fs');

// readFile → reads a file asynchronously (non-blocking)
// './t4_read.txt' → file path (relative path)
// 'utf8' → converts file data from Buffer to readable text
// callback → runs after file is read
readFile('./t4_read.txt', 'utf8', (error, result) => {

    // If any error occurs while reading the file
    if (error) {
        console.log("there is an error");
        return; // stops further execution
    }

    // result contains the file content
    const data = result;
    console.log(data);

    // writeFile → writes data into a file asynchronously
    // './t4_write.txt' → file to create or overwrite
    // template string → writing read file data into new file
    // callback hell → callbacks inside callbacks
    writeFile(
        './t4_write.txt',
        `this is your file data : ${data}\n`,
        (err) => {

            // If error occurs while writing
            if (err) {
                console.log("error while writing file");
                return;
            }

            // Runs when file is written successfully
            console.log("file written successfully");
        }
    );
});
