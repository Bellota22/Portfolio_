import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { data } from './constants'

function Work() {
   

    const handleGithub = (url) => {
        window.open(url)
    }

    const handleDemo = (url) => {
        window.open(url)
    }

  return (
    <div id='work' className='h-auto bg-header p-4' >
        <div className='flex items-end px-2  text-2xl ' >
              <h1 className='font-semibold text-white leading-none lg:text-[32px]' >
                  Work
              </h1>
              <div className='rounded-full bg-green-700/50 w-[10px] h-[10px] flex items-baseline '/>
          </div>

        <div className=' w-full text-white flex flex-col items-center justify-center mt-10 lg:grid lg:grid-cols-2 ' >
            {
                Object.keys(data).map((key) => {
                    return (
                        <div key={key} className=' mb-4 bg-slate-900/50 h-84 w-64  rounded-xl  lg:place-self-center ' >

                            <div key={key} className='flex flex-col gap-2 mb-6' >
                                <img className='w-full h-48 bg-blue-100 rounded-t-xl object-cover' src={data[key].img} />
                                <p className='p-2 text-[18px] font-semibold  text-sky-400' >
                                    {data[key].title}
                                </p>
                                <p className=' px-2 text-[16px] font-light' >
                                    {data[key].description}
                                </p>

                                <div className='flex p-2 gap-2 pb-4 ' >
                                    {
                                        data[key].github === '' ? null : 
                                        <div
                                        onClick={() => handleGithub(data[key].github)}
                                        className='cursor-pointer flex gap-2 items-center w-32 h-8 rounded-xl border justify-center border-sky-400 text-sky-400 hover:border-green-700/50 hover:text-green-700/50 transition duration-300 ease-in-out ' >
                                            <p>Code </p>
                                            <FaGithub />
                                        </div>
                                    }
                                   
                                   {
                                    data[key].demo === '' ? null :
                                    <div
                                    onClick={() => handleDemo(data[key].demo)}
                                    className='cursor-pointer flex gap-2 items-center  w-32 h-8 rounded-xl  justify-center bg-sky-400 text-white hover:bg-green-700/50 transition duration-300 ease-in-out' >
                                        <p>Demo </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div> 
                                   }
                                </div>
                            </div>
                        </div>

                    )
                })
            }
               
        </div>


    </div>
  )
}

export default Work