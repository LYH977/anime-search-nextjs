import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-4 bg-transparent text-white font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto
    before:content-[""] before:absolute before:top-0 before:left-[calc(-50vw+50%)] before:w-screen before:h-full before:-z-[1] before:bg-gradient-to-l before:from-cyan-500 before:to-blue-500  before:shadow-lg 
    '>

      <p>MyAnime</p>
    </nav>
  )
}

export default Navbar