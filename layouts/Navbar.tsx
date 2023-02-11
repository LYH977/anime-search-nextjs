import React from 'react'
import Link from 'next/link';

import { ThemeProps, ThemeToggle } from 'layouts'

const Navbar = ({ isDarkMode, toggleDarkMode }: ThemeProps) => {
  return (
    <div className='w-full h-full primaryBgColor shadow-lg'>
      <nav className='box-border flex justify-between p-4 bg-transparent font-bold mb-4 max-w-5xl mx-auto relative z-1 h-auto'>
        {/* <Link href='/' onClick={ refreshData } shallow className='text-white'>NextAnime</Link> */ }
        <p className='text-white'>NextAnime</p>
        <ThemeToggle isDarkMode={ isDarkMode } toggleDarkMode={ toggleDarkMode } />
      </nav>
    </div>
  )
}

export default Navbar




