import React, { useState } from 'react'
import useData from './TestContext';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai';
import { BiUpArrowAlt } from 'react-icons/bi'

function FullNote() {
    const { currentote } = useData();
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    const handleclick = () => {
        setFlag(!flag);
    }
    return (
        <div className='p-3 flex flex-col md:items-center md:justify-center'>
            <div className='  w-full shadow-lg h-full my-3 border-t-4 border-blue-500 rounded-md relative md:w-[750px] '>
                <div className={`flex text-blue-600 px-6 my-2 absolute right-4 gap-3 ${flag ? "h-auto" : "h-0"} overflow-hidden`}>
                    <FaEdit size={25} />
                    <MdDelete size={25} />
                </div>
                <section className=' absolute right-1 my-1' onClick={handleclick}>
                    {
                        (flag) ? <BiUpArrowAlt size={25} /> : <AiFillCaretDown size={25} />
                    }
                </section>
                <div className='p-4 pt-1'>
                    <h1 className=' text-3xl font-bold m-4'>{currentote.title}</h1>
                    <p className='text-lg m-2'>{currentote.text}</p>
                </div>
            </div>
        </div>
    )
}

export default FullNote