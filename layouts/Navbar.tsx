import React from 'react'
import { ThemeToggle } from './ThemeToggle'

const Navbar = ({ isDarkMode, toggleDarkMode }: any) => {
  return (

    <div className='w-full h-full primaryColor shadow-lg'>

      <nav className='box-border flex justify-between p-4 bg-transparent font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto 
    '>
        <p className='text-white isolate'>NextAnime</p>
        <ThemeToggle isDarkMode={ isDarkMode } toggleDarkMode={ toggleDarkMode } />
      </nav>
    </div>
  )
}

export default Navbar




