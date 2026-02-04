// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

/* -------------------- MIDDLEWARE -------------------- */
// Parses incoming JSON data and puts it into request.body
app.use(express.json());

/* -------------------- TEMPORARY DATA -------------------- */
// Users stored in memory (for learning purpose)
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

app.get('/api/user',(request,response)=>{
    return response.send(users);
})

// Update user by ID
// PUT http://localhost:5500/api/user/2
app.put('/api/user/:id', (request, response) => {

    // Get body and id from request
    // body  -> updated data sent by client
    // id    -> user id from URL
    const { body, params: { id } } = request;

    // Convert id from string to number
    const parsedId = parseInt(id);

    // If id is not a number, return 404
    if (isNaN(parsedId)) return response.sendStatus(404);

    // Find index of user with matching id
    const findUserIndex = users.findIndex(
        (user) => user.id === parsedId
    );

    // If user is not found, return 404
    if (findUserIndex === -1) return response.sendStatus(404);

    // Replace old user data with new data
    // Keep the same id, update other fields
    users[findUserIndex] = {
        id: parsedId,
        ...body
    };

    // Send success status
    return response.sendStatus(200);
});

/* -------------------- SERVER -------------------- */

// Define port
const port = 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});


