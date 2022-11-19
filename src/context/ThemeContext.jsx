import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
const SetThemeContext = createContext()

export function ThemeProvuder({ children }) {
    const [theme, setTheme] = useState('light')

    function changeThemeHandler() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }


    return (
        <ThemeContext.Provider value={theme}>
            <SetThemeContext.Provider value={changeThemeHandler}>
                {children}
            </SetThemeContext.Provider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}

export function useSetTheme() {
    return useContext(SetThemeContext)
}