import React, { useState } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Navbar() {

    const [search, setSearch] = useState("")
    // const [searchstart, setSearchstart] = useState(false)
    // const [data, setData] = useState([])

    const user=false;
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
                        <input onKeyPress={(e) => e.key === 'Enter'}
                            onChange={e => setSearch(e.target.value)}
                            className="Srch" placeholder="Search For Notes" type="search" name="" id="" />
                        <SearchIcon
                            style={{ "fontSize": "40" }} className='iconSrch' />
                    </div>
                </div>
                {user ? (<span className="contents">LOGOUT</span>) : (<Link className="link" to="/login">
                    <span className="contents">LOGIN</span>
                </Link>)}
            </div>
            {/* {searchstart && <Search search={search} responses={data} />} */}
        </>
    )
}
