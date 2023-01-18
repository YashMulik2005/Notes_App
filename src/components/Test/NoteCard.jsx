import React from 'react';
import useData from './TestContext';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function NoteCard({ id, title, text }) {

    const { removeData } = useData();

    const handleDeleteClick = () => {
        removeData({ id, title, text });
    }
    return (
        <div className=' border-2 p-3 flex flex-col h-52 relative rounded-md'>
            {/* <h1>{id}</h1> */}
            <section className=' flex justify-between'>
                <h1 className=' text-lg font-bold'>{title}</h1>
                <section onClick={handleDeleteClick} className="p-1 cursor-pointer  text-blue-700 flex">
                    <FaEdit size={20} />
                    <MdDelete size={20} />
                </section>
            </section>
            <p className='overflow-y-auto p-1'>{text}</p>
            {/* <button className=' text-blue-700 w-20 p-1 rounded-sm absolute right-2 bottom-2 font-bold hover:bg-blue-700 hover:text-white'>Full Note</button> */}
        </div>
    )
}

export default NoteCard