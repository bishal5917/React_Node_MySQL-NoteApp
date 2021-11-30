const express = require('express')
var bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

//cors policy
const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "noteusers"
})

db.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected")
    }
})

//import for routes
const userroute = require('./Users/users')
const noteroute = require('./Notes/notes')


//routes for router
app.use('/api/users', userroute)
app.use('/api/notes', noteroute)


app.listen(5000, () => {
    console.log("Backend is Running")
})

