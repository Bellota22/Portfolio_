import React from 'react'
import profile from '../../assets/me1.jpg'
import './Header.css'
import { FaGithub, FaLinkedin, FaArrowDown   } from "react-icons/fa";

function Header() {
  return (
    <div className='w-full h-[100vh] text-white flex flex-col justify-center items-center lg:flex-row ' >
        <div className='molecule' >
            <img className='w-[200px] h-[200px] rounded-full object-cover ' src={profile} alt="profile" />
        </div>

        <div className='lg:text-[30px]' >
            <p className='font-semibold' >Hi, I'm Gabriel</p>
            <p className='font-bold text-sky-400' >Fullstack Developer</p>
            <p className='font-semibold' >That loves code</p>
            <div className='w-full h-8 mt-4 flex justify-start' >
                <a href='https://github.com/Bellota22' target='_blank' rel="noreferrer" ><FaGithub className="w-9 h-8 hover:text-green-700/50 transition duration-300 ease-in-out" /></a> 
                <a href='https://www.linkedin.com/in/gabvill/' target='_blank' rel="noreferrer" ><FaLinkedin className="w-9 h-8 hover:text-green-700/50 transition duration-300 ease-in-out" /></a>
            </div>
        </div>

        <FaArrowDown className='absolute bottom-0 left-0 right-0 m-auto w-8 h-8 animate-bounce' />
            
    </div>
  )
}

export default Header