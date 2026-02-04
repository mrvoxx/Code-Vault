const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({
    secret : 'keyboard',
    resave : false, //Do NOT save session again if nothing changed
    saveUninitialized : true,//Saves a session even if it has no data yet
    cookie : {secure : false //Allows cookie on HTTP (right now it is in local host)
         , maxAge:60000}//Session expires after 60 seconds (after expire---->session data deleted)
}));

app.get('/',(req,res)=>{
    res.send('home page');
})

app.get('/test',(req,res)=>{
    console.log(req.session.id);
    res.send('hello');
})

// Port number
const port = process.env.PORT || 5500;

// Start server
app.listen(port, () => {
    console.log(`server is running : http://localhost:${port}`);
});