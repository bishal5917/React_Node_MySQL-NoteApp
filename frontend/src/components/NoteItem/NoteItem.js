import React from 'react'
import './noteitem.css'
import { Link } from 'react-router-dom'
import DriveFileRenameOutlineOutlinedIcon from
    '@mui/icons-material/DriveFileRenameOutlineOutlined';

function NoteItem({ note }) {
    return (
        <>
            <div className='PostContainer'>
                <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" style={{
                    height: "30vh",
                    width: "20vw"
                }} alt='none' />

                <Link className="link" to={`/note/${note.note_id}`}>
                    <h2 className='heading'>
                        {note.title}
                    </h2>

                </Link>
                <div className='authorAndDate'>
                    <DriveFileRenameOutlineOutlinedIcon />
                    <span className='Date'>{note.createdAt}</span>
                </div>
            </div>
        </>
    )
}

export default NoteItem
