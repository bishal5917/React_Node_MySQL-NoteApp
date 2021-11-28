const express = require('express')
const mysql = require('mysql')

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
})

db.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected")
    }
})

app.listen(5000, () => {
    console.log("Backend is Running")
})