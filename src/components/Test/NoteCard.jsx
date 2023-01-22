import React from 'react';
import useData from './TestContext';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import EditForm from './EditForm';
import { useNavigate } from 'react-router-dom';


function NoteCard({ id, title, text, uid }) {

    const { removeData, setCurrentote } = useData();
    const navigate = useNavigate();

    const handleclick = () => {
        setCurrentote({ uid, title, text, id });
        navigate("/fullnote");
    }
    const handleEdit = () => {
        setCurrentote({ uid, title, text });
        navigate("/edit");

    }
    const handleDeleteClick = () => {
        {
            if (confirm("Are you sure?")) {
                removeData({ id, title, text });
            }
        }
    }
    return (
        <div className=' border-2 p-3 flex flex-col h-52 rounded-md relative'>
            {/* <h1>{id}</h1> */}
            <section className=' flex justify-between'>
                <h1 className=' text-lg font-bold'>{title}</h1>
                <section className='flex '>
                    <section className="p-1 cursor-pointer  text-blue-700 flex">
                        <button onClick={handleEdit}><FaEdit size={25} /></button>
                    </section>
                    <section onClick={handleDeleteClick} className="p-1 cursor-pointer  text-blue-700 flex">
                        <MdDelete size={25} />
                    </section>
                </section>
            </section>
            <p className='overflow-y-auto p-1 break-normal block max-w-full'>{text}</p>
            <button onClick={handleclick} className='bg-blue-700 text-white font-semibold w-20 p-1 rounded-md absolute right-2 bottom-2'>Full Note</button>
            {/* <button className=' text-blue-700 w-20 p-1 rounded-sm absolute right-2 bottom-2 font-bold hover:bg-blue-700 hover:text-white'>Full Note</button> */}
        </div>
    )
}

export default NoteCard