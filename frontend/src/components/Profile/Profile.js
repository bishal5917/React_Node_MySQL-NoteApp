import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

export default function Profile() {

    const user = useSelector(state => state.user.curruser && state.user.curruser)
    const id = user && user.id
    const [name, setName] = useState(user && user.name)
    const [pass, setPass] = useState("")
    const [success, setSuccess] = useState(false)
    var password;
    if (pass) {
        password = pass
    }
    else {
        password = user && user.password
    }

    const updateUserHandler = async () => {
        try {
            await axios.put(`/users/update/user`, {
                name,
                password,
                id
            })
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar />
            <div className='signupcontainer'>
                <div className="inputsCont">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input value={name} required={true}
                            onChange={e => setName(e.target.value)}
                            type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Password</label>
                        <input value={pass} required={true}
                            onChange={e => setPass(e.target.value)}
                            type="text" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <button onClick={updateUserHandler}
                        class="butn">UPDATE</button>
                    {
                        success && (<div class="alert alert-success" role="alert">
                            Updated Successfully,Please Logout and Login again to see changes !
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}
