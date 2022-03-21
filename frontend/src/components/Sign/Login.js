import React, { useState } from 'react'
import './loginandreg.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginStart, loginSuccess, loginFailure } from "../../Redux/UserRedux";
import axios from 'axios'

function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [filled, setFilled] = useState(false)

    const loginUser = async () => {
        dispatch(loginStart())
        try {
            const res = await axios.post('users/login', { name, password })
            dispatch(loginSuccess(res.data))
            console.log(res)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            if (res.data.id) {
                navigate('/')
            }
            else {
                setFilled(true)
                setTimeout(() => {
                    setFilled(false)
                }, 2000);
            }
        } catch (error) {
            dispatch(loginFailure())
        }
    }
    return (
        <>
            <div>
                <div className="box">
                    <Link to="/">
                        <h5>Webinotes</h5>
                    </Link>
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
                        <input onClick={loginUser}
                            type="button" id="sub" className="btn" value="Login" />
                        {
                            filled && (<div className="failed" role="alert">
                                Error : Incorrect Details !!!
                            </div>)
                        }
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
