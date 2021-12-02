import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './loginandreg.css'

function Reg() {

    //states for register process
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [filled, setFilled] = useState(false)
    const navigate = useNavigate()

    //function to register user
    const registerUser = async (e) => {
        e.preventDefault()
        if (name && password) {
            try {
                const response = await axios.post('/users/register', {
                    name, password
                })
                if (response.status === 200) {
                    navigate('/login')
                }
            }
            catch (err) {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            }
        }
        else {
            setFilled(true)
            setTimeout(() => {
                setFilled(false)
            }, 3000);
        }

    }
    return (
        <>
            <div>
                <div class="box">
                    <h2 id="head">Register</h2>
                    <form>
                        <input value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" name="text" className="email"
                            placeholder="Username" />
                        <div id="emailcheck"></div>
                        <input value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password" name="password" id="pass" placeholder="Password" />
                        <div id="passcheck"></div>
                        <input onClick={registerUser}
                            type="button" id="sub" className="btn" value="Register" />
                    </form>
                    <hr></hr>
                    <div className="anotherOption">
                        <p id="para"> Already a member ?  </p>
                        <Link className="link" to="/login">
                            <span id="regnavigate"> Login </span>
                        </Link>
                    </div>
                    {error && (<span className="failed">Error : Something Went Wrong !!!</span>)}
                    {filled && (<span className="failed">Please Fill out All the fields !!!</span>)}
                </div>

                <div class="topic">
                    <h1 class="sum">WebiNotes</h1>
                    <hr />
                    <p id="parax">The ultimate platform to manage your notes securely on the
                        web. </p>
                </div>
            </div>
        </>

    )
}

export default Reg
