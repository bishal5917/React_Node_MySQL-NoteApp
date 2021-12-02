import React, { useState } from 'react'
import './loginandreg.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Redux/ApiCalls'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () => {
        if (name && password) {
            try {
                loginUser(dispatch, { name, password })
                navigate('/')
            } catch (error) {
                console.log(error)
            }
            setName("")
            setPassword("")
        }
        else {
            alert("Please Enter the details")
        }

    }
    return (
        <>
            <div>
                <div className="box">
                    <h2 id="head">Login</h2>
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
                        <input onClick={handleLogin}
                            type="button" id="sub" className="btn" value="Login" />
                    </form>
                    <hr></hr>
                    <div className="anotherOption">
                        <p id="para"> New to our platform ? </p>
                        <Link className="link" to="/register">
                            <span id="regnavigate"> Register </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
