const router = require("express").Router()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "noteusers"
})

//create a note
router.post('/create', (req, res) => {
    db.query("INSERT into notesinfo (title,description,id) VALUES (?,?,?)",
        [req.body.title,
        req.body.description,
        req.body.id],
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

//getnotes of a user
router.get('/getnotes', (req, res) => {
    db.query("SELECT * FROM notesinfo WHERE id=?",
        [req.body.id],
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

//getnote by its id
router.get('/:noteid', (req, res) => {
    db.query("SELECT * FROM notesinfo WHERE note_id=?",
        [req.params.noteid],
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

//delete a note


//edit a note

module.exports = router