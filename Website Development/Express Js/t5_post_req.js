// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

/* -------------------- MIDDLEWARE -------------------- */
// This middleware converts incoming JSON data into JavaScript objects
// Without this, request.body will be undefined
app.use(express.json());

/* -------------------- TEMPORARY DATA -------------------- */
// Users stored in memory (for learning purpose only)
const users = [
    { id: 1, user: 'ryan', displayName: 'ryan gracia' },
    { id: 2, user: 'john', displayName: 'john smith' },
    { id: 3, user: 'ria',  displayName: 'ria gypsy' }
];

/* -------------------- ROUTES -------------------- */

// Home route
// When someone visits http://localhost:5500/
app.get('/', (request, response) => {
    response.status(201).send('home page');
});

// Create a new user
// When someone sends POST request to http://localhost:5500/api/user
app.post('/api/user', (request, response) => {

    // Print data sent by the client
    console.log(request.body);

    // Get body from request (two ways shown)
    // const body = request.body;   // normal way
    const { body } = request;      // destructuring way

    // Create a new user object
    // - Generate new id by adding 1 to last user's id
    // - Copy all properties sent in request body
    const newUser = {
        id: users[users.length - 1].id + 1,
        ...body
    };

    // Save new user in the users array
    users.push(newUser);

    // Send back the newly created user with status 201 (Created)
    return response.status(201).send(newUser);
});

/* -------------------- SERVER -------------------- */

// Define port number
const port = 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
