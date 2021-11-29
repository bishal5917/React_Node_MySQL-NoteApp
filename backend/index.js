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

//apis
app.post('/register', (req, res) => {
    db.query("INSERT into usersinfo (name,password) VALUES (?,?)",
        [req.body.name,
        req.body.password],
        (err, result) => {
            if (err) {
                res.status(500).json(err)
            }
            else {
                res.status(200).json(result)
            }
        }
    )
})

app.post('/login', (req, res) => {

})


app.listen(5000, () => {
    console.log("Backend is Running")
})