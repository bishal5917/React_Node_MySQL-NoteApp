const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

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
const userroute=require('./Users/users')


//routes for router
app.use('/api/users', userroute)


app.listen(5000, () => {
    console.log("Backend is Running")
})

