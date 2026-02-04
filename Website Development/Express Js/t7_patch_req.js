// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Middleware to read JSON data from request body
app.use(express.json());

// Sample users data (acting like a database)
const users = [
    { id: 1, user: 'ryan', displayName: 'ryan gracia' },
    { id: 2, user: 'john', displayName: 'john smith' },
    { id: 3, user: 'ria', displayName: 'ria gypsy' }
];

// Home route
app.get('/', (request, response) => {
    // Send a simple response
    response.status(201).send('home page');
});

// GET users with optional query filtering
app.get('/api/user', (request, response) => {

    // Print query parameters in console
    // Example: /api/user?filter=user&value=jo
    console.log(request.query);

    // Extract filter and value from query object
    const { filter, value } = request.query;

    // If both filter and value are present
    if (filter && value) {

        // Filter users based on given field and value
        // user[filter] → dynamic key access
        // includes(value) → checks partial match
        return response.send(
            users.filter((user) => user[filter].includes(value))
        );
    }

    // If no query is provided, return all users
    return response.send(users);
});

// PATCH route to update only specific fields of a user
app.patch('/api/user/:id', (request, response) => {

    // Extract body and id from request
    const { body, params: { id } } = request;

    // Convert id from string to number
    const parsedId = parseInt(id);

    // If id is not a number, return error
    if (isNaN(parsedId)) return response.sendStatus(404);

    // Find index of user with matching id
    const findUserIndex = users.findIndex(
        (user) => user.id === parsedId
    );

    // If user does not exist, return error
    if (findUserIndex === -1) return response.sendStatus(404);

    // Update only the fields sent in request body
    // Existing data stays the same
    users[findUserIndex] = {
        ...users[findUserIndex],
        ...body
    };

    // Send success status
    return response.sendStatus(200);
});

// Set port number
const port = 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});

/*
Definition: Query
Data sent in the URL after '?'
Used for filtering, searching, or sorting

Example:
http://localhost:5500/api/user?filter=user&value=jo
*/
