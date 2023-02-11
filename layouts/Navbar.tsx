import { ThemeProps, ThemeToggle } from 'layouts'
import React from 'react'


const Navbar = ({ isDarkMode, toggleDarkMode }: ThemeProps) => {
  return (
    <div className='w-full h-full primaryBgColor shadow-lg'>
      <nav className='box-border flex justify-between p-4 bg-transparent font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto'>
        <p className='text-white isolate'>NextAnime</p>
        <ThemeToggle isDarkMode={ isDarkMode } toggleDarkMode={ toggleDarkMode } />
      </nav>
    </div>
  )
}

export default Navbar




