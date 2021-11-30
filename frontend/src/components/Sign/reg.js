import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './loginandreg.css'

function Reg() {

    //states for register process
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    //function to register user
    const registerUser = async (e) => {
        e.preventDefault()
        try {
        }
        catch (err) {
            setError(true)
        }
    }



    return (
        <>
            <div>
                <div class="box">
                    <h2 id="head">Register</h2>
                    {/* <form>
                        <input type="text" name="text" className="email"
                            onChange={e => setUsername(e.target.value)} placeholder="Username"
                        />
                        <div id="emailcheck"></div>
                        <input type="password" name="password" id="pass"
                            onChange={e => setPassword(e.target.value)} placeholder="Password"
                        />
                        <input type="button" onClick={registerUser} className="btn1" value="Register" />
                    </form> */}
                    <form>
                        <input type="text" name="text" className="email"
                            placeholder="Username" />
                        <div id="emailcheck"></div>
                        <input type="password" name="password" id="pass" placeholder="Password" />
                        <div id="passcheck"></div>
                        <input type="button" id="sub" className="btn" value="Register" />
                    </form>
                    <hr></hr>
                    <div className="anotherOption">
                        <p id="para"> Already a member ?  </p>
                        <Link className="link" to="/login">
                            <span id="regnavigate"> Login </span>
                        </Link>
                    </div>
                    {error ? (<span className="Msg">Error : Username or Email is already taken</span>)
                        : (<span className="Msg"></span>)}
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
