import React from 'react'
import './create.css'

export default function Create({ show }) {
    return (
            <div className={show ? "createContainer" : "hide"}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button class="butn">ADD</button>
            </div>
    )
}
