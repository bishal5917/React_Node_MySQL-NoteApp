import React from 'react'
import { Link } from 'react-router-dom'
import DriveFileRenameOutlineOutlinedIcon from
    '@mui/icons-material/DriveFileRenameOutlineOutlined';
import '../NoteItem/noteitem.css'

export default function Sitems({ searched }) {


    return (
        <>
            <div className='PostContainer'>
                <img src="https://i.pinimg.com/originals/b6/cd/e8/b6cde81d1c489b0e20d85a6e06c5f8f9.png" style={{
                    height: "30vh",
                    width: "20vw"
                }} alt='none' />

                <Link className="link" to={`/note/${searched.note_id}`}>
                    <h2 className='heading'>
                        {searched.title}
                    </h2>

                </Link>
                <div className='authorAndDate'>
                    <DriveFileRenameOutlineOutlinedIcon />
                    <span className='Date'>{searched.createdAt}</span>
                </div>
            </div>
        </>
    )
}
