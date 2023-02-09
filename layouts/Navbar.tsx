import React from 'react'
import { DarkModeToggle } from './DarkModeToggle'

const Navbar = ({ setisDarkMode }: any) => {
  return (
    // <nav className='box-border flex justify-between isolate p-4  bg-transparent text-white font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto 
    // before:content-[""] before:absolute before:top-0  before:w-screen before:left-[calc(-50vw+50%)] before:h-full before:-z-[1] before:bg-gradient-to-l before:from-cyan-500 before:to-blue-500  before:shadow-lg before:overflow-hidden before:box-border
    // '>
    <div className='w-screen h-full bg-gradient-to-l from-cyan-500 to-blue-500  shadow-lg'>

      <nav className='box-border flex justify-between isolate p-4  bg-transparent text-white font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto 
    '>
        {/* before:left-[calc(-50vw+50%)] */ }
        <p >NextAnime</p>
        <input type='checkbox' onChange={ () => { setisDarkMode((prev: boolean) => !prev) } } />

      </nav>
    </div>
  )
}

export default Navbar