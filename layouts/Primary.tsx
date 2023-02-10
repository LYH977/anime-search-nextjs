import { useState } from "react"
import Navbar from "./Navbar"
import { ThemeBackground } from "./ThemeBackground"

export const Primary = () => {
    const [isDarkMode, setisDarkMode] = useState(false)

    return (
        <>
            <Navbar isDarkMode={ isDarkMode } toggleDarkMode={ () => { setisDarkMode(prev => !prev) } } />
            <ThemeBackground isDarkMode={ isDarkMode } />
        </>
    )
}