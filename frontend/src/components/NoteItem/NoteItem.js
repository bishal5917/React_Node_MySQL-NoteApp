import React from 'react'
import './noteitem.css'
import { Link } from 'react-router-dom'
import DriveFileRenameOutlineOutlinedIcon from
 '@mui/icons-material/DriveFileRenameOutlineOutlined';

function NoteItem({ post }) {
    return (
        <>
            <div className='PostContainer'>
                <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" style={{
                    height: "30vh",
                    width: "20vw"
                }} alt='none' />

                <Link className="link" to="/post/id">
                    <h2 className='heading'>
                        node
                    </h2>

                </Link>
                <div className='authorAndDate'>
                    <DriveFileRenameOutlineOutlinedIcon />
                    <span className='Date'>16 hours ago</span>
                </div>
            </div>
        </>

    )
}

export default NoteItem
