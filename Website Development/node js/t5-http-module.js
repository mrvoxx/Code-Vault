// Import built-in http module
const http = require("http");

// Create server
const server = http.createServer((request, response) => {

    // If user visits home page
    if (request.url === "/") {
        response.write(
            `<html>
                <h1>welcome to our website</h1>
                <p>to go to about section 
                <a href="http://localhost:${port}/about">click here</a></p>
            </html>`
        );
    }

    // If user visits about page
    else if (request.url === "/about") {
        response.write(`
            <html>
                <h1>you are in about section</h1>
                <p>this is created by ashwin kishor dangwal</p>
                <p>to go to home page 
                <a href="http://localhost:${port}/">click here</a></p>
            </html>
        `);
    }

    // For any wrong URL
    else {
        response.end(`
            <html>
                <h1>OOPS!</h1>
                <p>wrong page go to <a href="/">home page</a></p>
            </html>
        `);
    }

    // End the response
    response.end();
});

// Port number
const port = 5500;

// Start server
server.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});
