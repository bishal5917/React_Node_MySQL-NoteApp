import React from 'react'
import './loginandreg.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {

    //function to login user

    return (
        <>
            <div>
                <div className="box">
                    <h2 id="head">Login</h2>
                    <form>
                        <input type="text" name="text" className="email"
                            placeholder="Username" />
                        <div id="emailcheck"></div>
                        <input type="password" name="password" id="pass" placeholder="Password" />
                        <div id="passcheck"></div>
                        <input type="button" id="sub" className="btn" value="Login" />
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
