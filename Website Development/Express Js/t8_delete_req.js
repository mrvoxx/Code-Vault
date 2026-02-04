// Import express framework
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON data from request body
app.use(express.json());

// Sample users data (temporary in-memory data)
const users = [
    { id: 1, user: 'ryan', displayName: 'ryan gracia' },
    { id: 2, user: 'john', displayName: 'john smith' },
    { id: 3, user: 'ria', displayName: 'ria gypsy' }
];

// Home route
app.get('/', (request, response) => {
    // Send a response when user visits "/"
    response.status(201).send('home page');
});

// GET users (with optional query filtering)
app.get('/api/user', (request, response) => {

    // Print query parameters in console
    // Example: /api/user?filter=user&value=jo
    console.log(request.query);

    // Extract filter and value from query
    const { filter, value } = request.query;

    // If filter and value are provided
    if (filter && value) {

        // Filter users dynamically
        // user[filter] → access property dynamically
        // includes(value) → partial match
        return response.send(
            users.filter((user) => user[filter].includes(value))
        );
    }

    // If no query, return all users
    return response.send(users);
});

// DELETE user by id
app.delete('/api/user/:id', (request, response) => {

    // Extract id from URL params
    const { params: { id } } = request;

    // Convert id to number
    const parsedId = parseInt(id);

    // If id is not a number, return error
    if (isNaN(parsedId)) return response.sendStatus(404);

    // Find index of user with given id
    const findUserIndex = users.findIndex(
        (user) => user.id === parsedId
    );

    // If user not found, return error
    if (findUserIndex === -1) return response.sendStatus(404);

    // ❗ Remove user from array
    users.splice(findUserIndex, 1);

    // Send success response
    return response.sendStatus(200);
});

// Port number
const port = 5500;

// Start server
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
