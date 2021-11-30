import React, { useState, useEffect } from 'react'
import './shownote.css'
import { useLocation } from 'react-router'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

function ShowNote() {
    const location = useLocation()
    const path = location.pathname.split('/')[2];

    const [note, setNote] = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const d=new Date()
    let x=d.toDateString();
    // console.log(x)
    // console.log(d.getSeconds())

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


    // //deleting Post
    // const handleDeletePost = async (req, res) => {
    //     try {
    //         await axios.delete('/posts/deletepost/' + path, {
    //             //i used path here because i already extracted that path which is id
    //             data: { username: user.username }
    //             //for delete data should be written 
    //         })
    //         window.location.replace('/home')

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
            <div className="signupcontainer">
                <div className="inputsCont">
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
            </div>
        </>
    )
}

export default ShowNote
