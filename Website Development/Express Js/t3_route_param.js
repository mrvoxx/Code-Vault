// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

/* -------------------- DATA (Temporary) -------------------- */
// User data stored in memory (for learning purpose)
const users = [
    { id: 23456, user: 'ryan', displayName: 'ryan gracia' },
    { id: 2345,  user: 'john', displayName: 'john smith' },
    { id: 2346,  user: 'ria',  displayName: 'ria gypsy' }
];

// Product data stored in memory
const products = [
    { id: 1, user: 'chicken', price: 100 },
    { id: 2, user: 'comb',    price: 200 },
    { id: 3, user: 'chair',   price: 300 }
];

/* -------------------- ROUTES -------------------- */

// Home route
// When user visits http://localhost:5500/
app.get('/', (request, response) => {
    response.status(201).send('home page');
});

// Get all users
// http://localhost:5500/api/user
app.get('/api/user', (request, response) => {
    response.send(users);
});

// Get single user by ID
// http://localhost:5500/api/user/2345
app.get('/api/user/:id', (request, response) => {

    // Print route parameters (id)
    console.log(request.params);

    // Convert id from string to number
    const parsedId = parseInt(request.params.id);
    console.log(parsedId);

    // Check if id is not a number
    if (isNaN(parsedId)) {
        return response
            .status(400)
            .send({ msg: 'invalid id , ID is not numeric' });
    }

    // Find user with matching id
    const findUser = users.find((user) => user.id === parsedId);
    console.log(findUser);

    // If user not found, send 404
    if (!findUser) return response.sendStatus(404);

    // If user found, send user data
    return response.status(200).send(findUser);
});

// Get all products
// http://localhost:5500/api/product
app.get('/api/product', (request, response) => {
    response.send(products);
});

/* -------------------- SERVER -------------------- */

// Use environment port if available, else use 5500
const port = process.env.port || 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
