import React from 'react'

export const ThemeBackground = ({ isDarkMode }: any) => {
    return (
        <div className={ `fixed h-[150vh] w-[200vw] pointer-events-none rounded-b-[100%] mix-blend-difference top-[-50vh] left-[-50vw] bg-[#ebe5e1]  transition-all duration-1000 ${isDarkMode ? 'translate-y-[20vh]' : 'translate-y-[-101vh]'}` }></div>
    )
}


