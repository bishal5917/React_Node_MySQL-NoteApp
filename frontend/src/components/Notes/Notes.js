
import React, { useState, useEffect } from 'react'
import './notes.css'
import Axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import NoteItem from '../NoteItem/NoteItem';

function Notes() {
    const [notes, setNotes] = useState([]);
    const id = 1

    useEffect(() => {
        const getNotesFunc = async () => {
            try {
                const response = await Axios.get(`notes/getnotes/${id}`)
                setNotes(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getNotesFunc();
    }, []);
    return (
        <>
            <div className="addANote">
                <AddIcon style={{ fontSize: "50", color: "purple" }} />
            </div>
            <div className='AllPosts'>
                {notes.map((p) => (
                    <NoteItem note={p} />
                ))}
            </div>
        </>

    )
}

export default Notes
