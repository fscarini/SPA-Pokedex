import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#ffffff',
        togglerRail: '#777777',
        header: '#efefef'
    },
    dark: {
        color: '#ffffff',
        background: '#202124',
        togglerRail: '#777777',
        header: '#0f1011'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState(themes.light)

    useEffect(() => {
        const root = document.documentElement
        // root.style.transition = 'background-color 0.3s ease, color 0.3s ease' // Transição suave para as cores
        document.body.style.backgroundColor = theme.background
        document.body.style.color = theme.color
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}