import React, { useState } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/UserRedux';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

    const [search, setSearch] = useState("")
    // const [searchstart, setSearchstart] = useState(false)
    // const [data, setData] = useState([])

    //getting the id of a logged in user from a redux state
    const user = useSelector(state => state.user.curruser)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        const confirmed = window.confirm('Are You sure you want to log out ???')
        if (confirmed) {
            dispatch(logOut())
            window.location.reload()
            navigate('/')
        }

    }
    return (
        <>
            <div className="Nav">
                <Link className="link" to="/">
                    <div className="leftPart">
                        WebiNotes
                    </div>
                </Link>
                <div className="rightPart">
                    <div className="searchContainer">
                        <SearchIcon
                            style={{ "fontSize": "30" }} className='iconSrch' />
                        <input onKeyPress={(e) => e.key === 'Enter'}
                            onChange={e => setSearch(e.target.value)}
                            className="Srch" placeholder="Search For Notes" type="search" name="" id="" />

                    </div>

                </div>
                {user ? (<span onClick={handleLogout}
                    className="logout">LOGOUT</span>) : (<Link className="link" to="/login">
                        <span className="contents">LOGIN</span>
                    </Link>)}
            </div>
            {/* {searchstart && <Search search={search} responses={data} />} */}
        </>
    )
}
