// Import the Express library
const express = require('express');

// Create an Express application
const app = express();

// Define the port number where the server will run
const port = 5500;

// Start the server and listen on the given port
app.listen(port, () => {
    // This message is printed when the server starts successfully
    console.log(`server is running : http://localhost:${port}`);
});
