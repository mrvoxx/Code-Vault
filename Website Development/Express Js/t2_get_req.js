// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

//Defination route - A rule that decides what happens when a user visits a specific URL. 
// http://localhost:5000/api/user <--- route on going to a specific area what to show 
// http://localhost:5000/user <--- route 
// http://localhost:5000/product <--- route


/* -------------------- ROUTES -------------------- */

// Home route
// When someone opens http://localhost:5500/
app.get('/', (request, response) => {
    // Send text response with status code
    response.status(201).send('home page');
});

// User API route for user
// When someone opens http://localhost:5500/api/user
app.get('/api/user', (request, response) => {
    // Send a list of users as JSON
    response.send([
        { id: 1, user: 'ryan', displayName: 'ryan gracia' },
        { id: 2, user: 'john', displayName: 'john smith' },
        { id: 3, user: 'ria', displayName: 'ria gypsy' }
    ]);
});

// Product API route for product
// When someone opens http://localhost:5500/api/product
app.get('/api/product', (request, response) => {
    // Send a list of products as JSON
    response.send([
        { id: 1, user: 'chicken', price: 100 },
        { id: 2, user: 'comb', price: 200 },
        { id: 3, user: 'chair', price: 300 }
    ]);
});

/* -------------------- SERVER -------------------- */

// Use environment port if available, otherwise use 5500
const port = process.env.port || 5500;

// Start the server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
