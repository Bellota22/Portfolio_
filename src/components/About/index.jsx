import React from 'react'
import html_logo from '../../assets/html_logo.svg'
import CSS_logo from '../../assets/CSS3_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import Tailwind_CSS_logo from '../../assets/Tailwind_CSS_Logo.svg'
import FastAPI_logo from '../../assets/FastAPI.svg'
import django_logo from '../../assets/django.svg'
import gcp from '../../assets/gcp.svg'
import docker from '../../assets/docker.svg'

function About() {
  return (
    <div id='about' className='h-auto bg-slate-900/50 p-4  lg:text-[26px] ' >
        <div className='flex flex-col mb-8' >
          <div className='flex items-end px-2  text-2xl lg:text-[32px] ' >
              <h1 className='font-semibold text-white leading-none' >
                  About
              </h1>
              <div className='rounded-full bg-green-700/50 w-[10px] h-[10px] flex items-baseline '/>
          </div>
          <p className='text-white p-2 font-light  ' >
            With two years of experience in web applications, mobile apps, and cloud infrastructure management, known for creating scalable and efficient solutions.
          </p>
        </div>

        <div className='text-[18px] mb-8 lg:text-[26px]'>
          <h2 className='text-sky-400 p-2 font-semibold' >Tech Stack</h2>
          <div className='grid grid-cols-4 gap-y-4 ' >
            <img className='place-self-center w-16 h-16 rounded-full object-cover ' src={html_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-cover ' src={CSS_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-contain ' src={react_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-contain ' src={Tailwind_CSS_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-contain ' src={FastAPI_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-contain ' src={django_logo} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-cover ' src={gcp} alt="tech-stack" />
            <img className='place-self-center w-16 h-16 rounded-full object-cover ' src={docker} alt="tech-stack" />
          </div>
        </div>

        <div className='leading-none text-[18px] lg:text-[26px]' >
          <h2 className='text-sky-400 p-2 font-semibold' >Education</h2>
          <ul>


            <li className='px-4 mb-4'>
              <h3 className='text-white font-semibold'>Software Engineer</h3>
              <p className='text-white font-light lg:text-[20px] '>Platzi</p>
              <p className='text-white font-light lg:text-[20px] ' >02 2021 - Present</p>
            </li>

            <li className='px-4 mb-4'>
              <h3 className='text-white font-semibold'>Electronic and telecommunication Engineer</h3>
              <p className='text-white font-light lg:text-[20px] '>Catholic University Saint Pablo</p>
              <p className='text-white font-light lg:text-[20px] ' >06 2016 - 06 2022</p>
            </li>


          </ul>
         
            
        </div>
          


    </div>
  )
}

export default About