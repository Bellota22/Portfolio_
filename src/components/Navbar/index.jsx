import React from 'react'

function NavBar() {
  return (
    <div className='fixed top-0 left-0 right-0 h-[40px] bg-transparent backdrop-filter backdrop-blur-md z-50 border-b border-bg-header flex justify-between lg:h-[64px] '>
    
      <div className='text-[26px] text-white flex items-end leading-none p-2 lg:text-[36px] ' >
        GabCode
        <div className='rounded-full bg-green-700/50 w-[10px] h-[10px] flex items-baseline '/>
      </div>

      <div className='flex text-[16px] p-2 gap-2 lg:text-[36px]'>

        <a href='#' className='text-white hover:text-green-700/50 transition duration-300 ease-in-out' >Home</a>     
        <a href='#about' className='text-white hover:text-green-700/50 transition duration-300 ease-in-out' >About</a>     
        <a href='#work' className='text-white hover:text-green-700/50 transition duration-300 ease-in-out' >Work</a>     
        <a href='#contact' className='text-white hover:text-green-700/50 transition duration-300 ease-in-out' >Contact</a>     
        
      </div>

    
    </div>
  )
}

export default NavBar