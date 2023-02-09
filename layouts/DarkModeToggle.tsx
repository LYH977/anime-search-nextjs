import React from 'react'

export const DarkModeToggle = ({ isDarkMode }: any) => {
    return (
        <div className={ `fixed h-1 w-1 pointer-events-none rounded-full mix-blend-difference top-16 left-0 bg-[#ebe5e1] transition-transform duration-1000 ${isDarkMode ? 'scale-[1000]' : ''}` }></div>
    )
}


