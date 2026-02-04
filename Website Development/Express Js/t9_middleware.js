const express = require('express');
const app = express();

/* -------------------- 1. BUILT-IN MIDDLEWARE -------------------- */
// Parses JSON body
app.use(express.json());

/* -------------------- 2. GLOBAL CUSTOM MIDDLEWARE -------------------- */
const loggerMiddleware = (req, res, next) => {
    console.log('--- LOGGER ---');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Time:', new Date().toLocaleTimeString());
    console.log('---------------');

    next(); // VERY IMPORTANT
};

app.use(loggerMiddleware);

/* -------------------- 3. AUTH MIDDLEWARE -------------------- */
const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || authorization !== 'secret123') {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    next();
};

/* -------------------- 4. ROUTES -------------------- */
app.get('/', (req, res) => {
    res.send('Public Home Page');
});

/* Protected route using middleware */
app.post('/api/user', authMiddleware, (req, res) => {
    res.status(201).json({
        message: 'User created',
        data: req.body
    });
});

/* -------------------- 5. ERROR HANDLING MIDDLEWARE -------------------- */
app.use((err, req, res, next) => {
    console.error('ERROR:', err.message);

    res.status(500).json({
        error: 'Something went wrong'
    });
});

/* -------------------- SERVER -------------------- */
const port = 5500;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
