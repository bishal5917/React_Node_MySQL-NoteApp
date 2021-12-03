import React from 'react'
import Sitems from './Sitems'
import './search.css'

export default function Search({search,responses}) {
    return (
        <>
            <div className="featuredContainer">
                <span className="xtopic">
                    {responses.length} items found for "{search}"
                </span>
                <div className="items">
                    {responses.map((p) => (
                        <div><Sitems searched={p} /></div>
                    ))}
                </div>
            </div>
            <hr />
        </>
    )
}
