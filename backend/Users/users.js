const router = require("express").Router()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "noteusers"
})

//register api
router.post('/register', (req, res) => {
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

//login api
router.post('/login', (req, res) => {
    db.query("SELECT * FROM usersinfo WHERE name=? AND password=?",
        [req.body.name,
        req.body.password],
        (err, result) => {
            if (err) {
                res.status(500).json(err)
            }

            if (result) {
                res.status(200).json(...result)
            }
            else {
                res.status(401).json("WRONG CREDENTIALS")
            }
        }
    )
})

//USER UPDATE API
router.put('/update/:id', (req, res) => {
    if (req.params.id === req.body.id) {
        db.query("UPDATE usersinfo set name=?,password=? WHERE id=?",
            [req.body.name,
            req.body.password,
            req.body.id],
            (err, result) => {
                if (err) {
                    res.status(500).json(err)
                }

                if (result) {
                    res.status(200).json(result)
                }
                else {
                    res.status(401).json("WRONG CREDENTIALS")
                }
            }
        )
    }
    else {
        res.status(500).json("You cant edit others profile")
    }

})

module.exports = router