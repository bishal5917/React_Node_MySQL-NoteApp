import axios from 'axios'
import React, { useState } from 'react'
import './create.css'

export default function Create({ show }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [success, setSuccess] = useState(false)
    const [filled, setFilled] = useState(false)

    const id = 1

    const d = new Date()
    let x = d.toDateString();
    var createdAt = x
    console.log(createdAt)

    const createNoteHandler = async () => {
        if (title && description && id) {
            try {
                await axios.post('/notes/create', {
                    title,
                    description,
                    id,
                    createdAt
                })
                setSuccess(true)
                setTitle("")
                setDescription("")
            } catch (error) {
                console.log(error)
            }
        }
        else {
            setFilled(true)
            setTimeout(() => {
                setFilled(false)
            }, 3000);
        }
    }
    return (
        <div className={show ? "createContainer" : "hide"}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input value={title} required={true}
                    onChange={e => setTitle(e.target.value)}
                    type="text" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea value={description} required={true}
                    onChange={e => setDescription(e.target.value)}
                    class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={createNoteHandler}
                class="butn">ADD</button>
            {
                success && (<div class="alert alert-success" role="alert">
                    Note Created Successfully !!!
                </div>)
            }
            {
                filled && (<div class="alert alert-danger" role="alert">
                    Error : Please fill out all the fields !!!
                </div>)
            }
        </div>
    )
}