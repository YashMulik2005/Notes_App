import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import useData from './TestContext';
import { useNavigate } from 'react-router-dom';

function TestForm() {
    const { data, addData } = useData();
    const [title, settitle] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const id = uuid();
        addData({ id, title, text });
        setText("")
        settitle("")
        navigate("/");
    }
    return (
        <div className='flex flex-col'>
            <input type="text" placeholder='type here' className=' border-2 w-60 m-2' value={title} onChange={(event) => {
                settitle(event.target.value)
            }}></input>
            <input type="text" className=' border-2 w-60 m-2' value={text} onChange={(event) => {
                setText(event.target.value)
            }}></input>
            <button className=' border-2 w-16' onClick={handleClick}>Submit</button>
        </div>
    )
}

export default TestForm