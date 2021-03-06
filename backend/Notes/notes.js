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
    db.query("INSERT into notesinfo (title,description,id,createdAt) VALUES (?,?,?,?)",
        [req.body.title,
        req.body.description,
        req.body.id,
        req.body.createdAt],
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
router.get('/getnotes/:id', (req, res) => {
    db.query("SELECT * FROM notesinfo WHERE id=?",
        [req.params.id],
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


//search for notes
router.get('/searchnotes/:id', (req, res) => {
    db.query(`SELECT * FROM notesinfo WHERE title LIKE '%${req.query.title}%' AND id=${req.params.id}`,
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
    db.query("SELECT note_id,title,description,id,createdAt FROM notesinfo WHERE note_id=?",
        [req.params.noteid],
        (err, result) => {
            if (err) {
                res.status(500).json(err)
            }
            else {
                res.status(200).send(...result)
                //if done ... object is returned 
            }
        }
    )
})


//edit a note
router.put('/update/:noteid', (req, res) => {
    //getting userId from noteid
    // const userIdFromNoteId = db.query("SELECT id FROM notesinfo WHERE note_id=?",
    //     [req.params.noteid])
    // if (req.params.id === req.body.id) {
    db.query("UPDATE notesinfo set title=?,description=? WHERE note_id=?",
        [req.body.title,
        req.body.description,
        req.params.noteid],
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
    // }
    // else {
    // res.status(403).json("Forbidden")
    // }
})

//delete a note
router.delete('/delete/:id/:note_id', (req, res) => {
    // if (req.params.id === req.body.id) {
    db.query("DELETE FROM notesinfo WHERE note_id=?",
        [req.params.note_id],
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
    // }
    // else {
    //     res.status(500).json("Forbidden")
    // }
})
module.exports = router