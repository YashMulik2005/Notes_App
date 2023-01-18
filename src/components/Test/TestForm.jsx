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
        navigate("/allnotes");
    }
    return (
        <div className='flex flex-col justify-center items-center w-full p-3'>
            <form className=' border-t-4 border-blue-700 p-4 w-full sm:w-[400px] md:w-[550px] shadow-xl rounded-md '>
                <h1 className=' font-bold text-blue-700 text-lg underline text-center'>Add New Note</h1><br />
                <label className=' font-bold text-blue-700 m-2'>Title:</label><br />
                <input type="text" placeholder='Title' className=' border-2 rounded-md p-2 w-full focus outline-blue-200' value={title} name="title" required onChange={(event) => {
                    settitle(event.target.value)
                }} /><br />
                <label className=' font-bold text-blue-700 m-2'>Text:</label><br />
                <textarea placeholder='Text' className=' border-2 rounded-md p-2 w-full focus outline-blue-200' name="text" cols="" rows="5" value={text} onChange={(event) => {
                    setText(event.target.value)
                }} ></textarea><br />
                <button className=' border-2 p-2 m-3 bg-blue-700 text-white rounded-md hover:bg-blue-900' onClick={handleClick}>add note</button>
            </form>
        </div>
    )
}

export default TestForm