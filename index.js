/*
    Entrypoint for the Application
*/
const database = require('./middleware/database');
database.connect();

// To read environment variables from .env file we need to import this package
// then we configure all the variables using config() method
const dotenv = require('dotenv');
dotenv.config();
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 8000;

const express = require('express');
const bodyParser = require("body-parser");
const userRoute = require("./router/userRouter")

var app = express();
app.use(bodyParser.json())
app.get('/',(req,res) => {
    res.send("How you doing!!");
})

app.use("/travel-log-api/v1/users/",userRoute);

app.listen(port,hostname,()=>{
    console.log("Server listening on port " + port);
})
