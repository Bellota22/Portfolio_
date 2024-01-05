import React from 'react'
import profile from '../../assets/me1.jpg'
import './Header.css'
import { FaGithub, FaLinkedin  } from "react-icons/fa";

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
                <FaGithub className="w-9 h-8 hover:text-green-700/50 transition duration-300 ease-in-out" />
                <FaLinkedin className="w-9 h-8 hover:text-green-700/50 transition duration-300 ease-in-out" />
            </div>
        </div>
            
    </div>
  )
}

export default Header