// Import Node.js built-in OS module
// This module provides information about the operating system
const os = require('os');

// Get information about the current user
const user = os.userInfo();

// Print the complete user information object
console.log(user);

// Print only the username
console.log("username is", user.username);

// Print system uptime (how long the system has been running)
// os.uptime() returns time in seconds
console.log(`user ${user.username} has uptime of ${os.uptime()} seconds`);

// Create an object to store important OS details
const osInfo = {
    name: os.type(),          // Operating system name
    release: os.release(),    // OS version / release
    totalMemory: os.totalmem(), // Total system memory (in bytes)
    freeMemory: os.freemem()    // Free system memory (in bytes)
};

// Print operating system information
console.log(osInfo);
