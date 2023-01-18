import React, { useState, useEffect } from 'react'
import NoteCard from './NoteCard';
import { v4 as uuid } from "uuid";
import useData from './TestContext';
import TestForm from './TestForm';
import { Link, Route, Routes } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs'


function Test() {
    const { data, addData } = useData();

    // useEffect(() => {
    //     loadfirst();
    // }, [])

    return (
        <div className='w-full p-4'>
            {/* <TestForm /> */}
            <section className=' flex justify-between items-center'>
                <h1 className=' text-xl md:text-2xl mx-4 font-bold'>YOUR NOTES</h1>
                <button className='p-3 bg-blue-700 rounded-xl text-white font-bold px-4'><Link to="/newnote"><BsPlusLg /></Link></button>
            </section>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-3'>
                {
                    data?.map((item, index) => (<NoteCard id={item?.id} title={item?.title} text={item?.text} key={item?.id} />)
                    )
                    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto adipisci totam dignissimos quo! Beatae repellat distinctio nesciunt quas dolor cum alias amet sapiente quae maxime, hic doloremque maiores earum.
                }

            </div>
        </div>
    )
}

export default Test