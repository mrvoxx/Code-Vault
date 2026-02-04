// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

/* -------------------- TEMPORARY DATA -------------------- */
// Users stored in memory (for learning)
const users = [
    { id: 1, user: 'ryan', displayName: 'ryan gracia' },
    { id: 2, user: 'john', displayName: 'john smith' },
    { id: 3, user: 'ria',  displayName: 'ria gypsy' }
];

/* -------------------- ROUTES -------------------- */

// Home route
// http://localhost:5500/
app.get('/', (request, response) => {
    response.status(201).send('home page');
});

// Get users (with optional filtering using query params)
// Example:
// http://localhost:5500/api/user?filter=user&value=jo
app.get('/api/user', (request, response) => {

    // Print query parameters
    console.log(request.query);

    // Destructure filter and value from query 
    //filter and value are defined in query <---- e.g ?filter=user&value=ab
    // const filter = request.query.filter;
    // const value  = request.query.value;
    //or like shown below

    const { filter, value } = request.query;//filter and value are not inbuilt 

    // If both filter and value exist, apply filtering
    if (filter && value) {
        return response.send(
            users.filter((user) =>
                user[filter].includes(value)
            )
        );
    }

    // If no query is provided, return all users
    return response.send(users);
});

/* -------------------- SERVER -------------------- */

// Use environment port if available, otherwise use 5500
const port = process.env.port || 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
