import React from 'react'
import Link from 'next/link';

import { ThemeProps, ThemeToggle } from 'layouts'
import { LocaleSelection } from 'components/LocaleSelection';

const Navbar = ({ isDarkMode, toggleDarkMode }: ThemeProps) => {
  return (
    <div className='w-full h-full primaryBgColor'>
      <nav className='box-border flex justify-between p-4 bg-transparent font-bold bg-white max-w-5xl mx-auto relative z-1 h-auto shadow-lg'>
        <div className='center'>
          <Link href='/' className='text-white'>NextAnime</Link>
          <LocaleSelection />
        </div>
        <ThemeToggle isDarkMode={ isDarkMode } toggleDarkMode={ toggleDarkMode } />
      </nav>
      <div className='bg-white h-4'></div>
    </div>
  )
}

export default Navbar




