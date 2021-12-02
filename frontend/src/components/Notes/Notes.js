
import React, { useState, useEffect } from 'react'
import './notes.css'
import Axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import NoteItem from '../NoteItem/NoteItem';
import Create from '../create/Create';
import { useSelector } from 'react-redux';

function Notes() {
    const [notes, setNotes] = useState([]);

    //getting the id of a logged in user from a redux state
    const id = useSelector(state => state.user.curruser && state.user.curruser.id)

    useEffect(() => {
        if (id) {
            const getNotesFunc = async () => {
                try {
                    const response = await Axios.get(`notes/getnotes/${id}`)
                    setNotes(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getNotesFunc();
        }
    }, [id]);

    //for toggling the create 
    const [show, setShow] = useState(false)

    const toggleThat = () => {
        setShow(show ? false : true)
    }

    return (
        <>
            <div onClick={toggleThat}
                className="addANote">
                <AddIcon style={{ fontSize: "50", color: "purple" }} />
            </div>
            <Create show={show} />
            <div className='AllPosts'>
                {notes.map((p) => (
                    <NoteItem note={p} />
                ))}
            </div>
        </>

    )
}

export default Notes
