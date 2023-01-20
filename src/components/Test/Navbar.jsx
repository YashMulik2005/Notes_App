import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setshow] = useState(false);
    const change = () => {
        setshow(!show);
    }
    return (
        <div className=' mb-4'>
            <nav className={`flex justify-between  p-2 ${show ? "border-b-0" : "border-b-2"} `}>
                <h1 className=' mx-4 text-xl font-bold'>WHAT <span className=' text-blue-700'>TO-DO</span></h1>
                <section onClick={change} className="p-1 cursor-pointer md:hidden">
                    <GiHamburgerMenu size={25} />
                </section>
            </nav>
            <div id="main" className={` sm:flex items-center justify-center shadow-md`}>
                <ul className={`flex  ${show ? "h-32" : "h-0"} transition-all ease-linear duration-500 overflow-hidden flex-col  md:flex-row md:h-auto`}>
                    <li className=' mx-2 my-1 font-semibold sm:hover:border-b-2 border-blue-700 lilink' onClick={change} ><Link to="/">All Notes</Link></li>
                    <li className=' mx-2 my-1 font-semibold sm:hover:border-b-2 border-blue-700 lilink' onClick={change}><Link to="/newnote" >New</Link></li>
                    <li className=' mx-2 my-1 font-semibold sm:hover:border-b-2 border-blue-700 lilink' onClick={change}><Link to="/about">About</Link></li>
                    <li className=' mx-2 my-1 font-semibold sm:hover:border-b-2 border-blue-700 lilink' onClick={change}>News</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar