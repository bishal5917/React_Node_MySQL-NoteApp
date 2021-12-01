
import React, { useState, useEffect } from 'react'
import './notes.css'
import Axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import NoteItem from '../NoteItem/NoteItem';
import Create from '../create/Create';

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

    //for toggling the create 
    const [show,setShow]=useState(false)

    const toggleThat=()=>{
        setShow(show?false:true)
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
