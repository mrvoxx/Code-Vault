const express = require("express");
const { validationResult, query, body, matchedData } = require("express-validator");
const app = express();

const users = [
    { id: 1, user: "ryan", displayName: "ryan gracia" },
    { id: 2, user: "john", displayName: "john smith" },
    { id: 3, user: "ria", displayName: "ria gypsy" },
];

app.get("/", (request, response) => {
    response.send("homepage");
});

app.get(
    "/api/user",
    query("filter")
        .isEmpty()
        .withMessage("it should be empty")
        .isString()
        .isLength({ min: 2, max: 4 })
        .withMessage("invalid length"),
    (request, response) => {
        console.log(validationResult);
        const { filter, value } = request.query; //filter and value are not inbuilt

        // If both filter and value exist, apply filtering
        if (filter && value) {
            return response.send(
                users.filter((user) => user[filter].includes(value))
            );
        }

        // If no query is provided, return all users
        return response.send(users);
    }
);

// Create a new user
// When someone sends POST request to http://localhost:5500/api/user
app.post(
    "/api/user",
    [
        body('user')
        .isEmpty()
        .withMessage("it should be empty")
        .isString()
        .isLength({ min: 2, max: 4 })
        .withMessage("invalid length"),
         body('displayName').isEmpty().withMessage('it should not be empty')
    ],
        (request, response) => {
        // Print data sent by the client
        const result = validationResult(request);
        const empty = result.isEmpty();
        console.log(result);

        if(!empty){
            return response.status(400).send({error : result.array()});
        }

        const data = matchedData(request);

        // Get body from request (two ways shown)
        // const body = request.body;   // normal way
        // const { body } = request; // destructuring way

        // Create a new user object
        // - Generate new id by adding 1 to last user's id
        // - Copy all properties sent in request body
        const newUser = {
            id: users[users.length - 1].id + 1,
            ...data,
        };

        // Save new user in the users array
        users.push(newUser);

        // Send back the newly created user with status 201 (Created)
        return response.status(201).send(newUser);
    }
);

// Port number
const port = 5500;

// Start server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
