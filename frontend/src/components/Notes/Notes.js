
import React, { useState, useEffect } from 'react'
import './notes.css'
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import NoteItem from '../NoteItem/NoteItem';

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getPostsFunc = async () => {
            try {

            } catch (error) {
                console.log(error)
            }
        }
        getPostsFunc();
    }, []);
    return (
        <>
            <div className="addANote">
                <AddIcon style={{fontSize:"50",color:"purple"}}/> 
            </div>
            <div className='AllPosts'>
                {/* {notes.map((p)=>(
                      <NoteItem post={p}/>
                ))} */}
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
                <NoteItem />
            </div>
        </>

    )
}

export default Notes
