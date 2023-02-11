import { Moon, Sun } from 'assets'
import { ThemeProps } from 'layouts'
import React from 'react'

export const ThemeToggle = ({ isDarkMode, toggleDarkMode }: ThemeProps) => {

    return (
        <button
            className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
            aria-label='Background theme toggle'
            onClick={ toggleDarkMode }
        >
            <div
                className={ `isolate z-10 w-8 h-8 relative rounded-full transition duration-500 transform  p-1 text-white ${isDarkMode ? 'bg-gray-700 translate-x-4' : 'bg-red-500 -translate-x-2'}` }>
                <span className="isolate"></span>{ isDarkMode ? <Moon /> : <Sun /> }
            </div>
        </button>
    )
}