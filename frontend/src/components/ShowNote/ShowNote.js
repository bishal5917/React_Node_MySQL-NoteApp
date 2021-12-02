import React, { useState, useEffect } from 'react'
import './shownote.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Broken from '../Broken/Broken'

function ShowNote() {
    const location = useLocation()
    const path = location.pathname.split('/')[2];

    const [note, setNote] = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const getOneSinglePost = async () => {
            try {
                const responsePost = await axios.get('/notes/' + path)
                setNote(responsePost.data)
                setTitle(responsePost.data.title)
                setDescription(responsePost.data.description)

            } catch (error) {
                console.log(error)
            }
        }
        getOneSinglePost();
    }, [path])


    //getting the id of a logged in user from a redux state
    // const id = useSelector(state => state.user.curruser && state.user.curruser.id)


    const handleDeleteNote = async () => {
        const confirmed = window.confirm("Are you sure You want to delete this Note ??? ")
        if (confirmed) {
            try {
                const res = await axios.delete(`/notes/delete/${note.id}/` + path)
                if (res.status === 200) {
                    navigate('/')
                }

            } catch (error) {
                console.log(error)
            }
        }

    }

    // updating the post
    // const updatePost = async (req, res) => {
    //     // setUpdated(true)
    //     try {
    //         await axios.put('/posts/updatepost/' + path, {
    //             username: user.username,
    //             title,
    //             description
    //         })
    //         window.location.reload()
    //         // setUpdatemode(false)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <Navbar />
            {title ?
                (<div className="signupcontainer">
                    <div className="inputsCont">
                        <div className="iconsAndDate">
                            <div className="timeStamp">{note.createdAt}</div>
                            <div className="icons">
                                <EditIcon style={{ "fontSize": "35", "color": "teal" }} />
                                <DeleteOutlinedIcon onClick={handleDeleteNote}
                                    style={{ "fontSize": "35", "color": "brown" }} />

                            </div>
                        </div>
                        <div className="nameCont">
                            <span className="names">Title</span>
                            <div>
                                {title}
                            </div>
                            {/* <input value={title} onChange={e => setTitle(e.target.value)}
                            type="text" name="" id="" /> */}
                        </div>
                        <div className="nameCont">
                            <span className="names">Description</span>
                            <div>
                                {description}
                            </div>
                            {/* <textarea value={description}
                            name="" id="" cols="30" rows="10" /> */}
                        </div>
                        {/* <div className="nameCont">
                        <button
                            className="formBtn" >Login</button>
                    </div> */}
                    </div>
                </div>) : (<Broken/>)}
        </>
    )
}

export default ShowNote
