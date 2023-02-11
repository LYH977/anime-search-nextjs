import { useState } from "react"
import Navbar from "./Navbar"
import { ThemeBackground } from "./ThemeBackground"

export type ThemeProps = {
    isDarkMode: boolean
    toggleDarkMode: () => void
}

export const ThemeWrapper = () => {
    const [isDarkMode, setisDarkMode] = useState(false)

    return (
        <>
            <Navbar isDarkMode={ isDarkMode } toggleDarkMode={ () => { setisDarkMode(prev => !prev) } } />
            <ThemeBackground isDarkMode={ isDarkMode } />
        </>
    )
}