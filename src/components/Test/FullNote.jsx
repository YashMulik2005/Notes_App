import React, { useState } from 'react'
import useData from './TestContext';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai';
import { BiUpArrowAlt } from 'react-icons/bi'

function FullNote() {
    const { currentote, setCurrentote, removeData } = useData();
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const id = currentote.id;
    const uid = currentote.uid;
    const title = currentote.title;
    const text = currentote.text;
    const handleclick = () => {
        setFlag(!flag);
    }
    const handleedit = () => {
        setCurrentote({ uid, title, text })
        navigate("/edit")
    }
    const handledelete = () => {
        removeData({ id, title, text });
        navigate("/allnotes");
    }
    return (
        <div className='p-3 flex flex-col md:items-center md:justify-center'>
            <div className='  w-full shadow-lg h-full my-3 border-t-4 border-blue-500 rounded-md relative md:w-[750px] '>
                <div className={`flex text-blue-600 px-6 my-2 absolute right-4 gap-3 ${flag ? "h-auto" : "h-0"} overflow-hidden cursor-pointer`}>
                    <section onClick={handleedit}>
                        <FaEdit size={25} />
                    </section>
                    <section onClick={handledelete}>
                        <MdDelete size={25} />
                    </section>
                </div>
                <section className=' absolute right-1 my-1 cursor-pointer' onClick={handleclick}>
                    {
                        (flag) ? <BiUpArrowAlt size={25} /> : <AiFillCaretDown size={25} />
                    }
                </section>
                <div className='p-4 pt-5'>
                    <h1 className=' text-3xl font-bold m-4'>{title}</h1>
                    <p className='text-lg m-2'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default FullNote