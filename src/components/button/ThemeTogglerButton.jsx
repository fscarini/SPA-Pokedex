import { ThemeContext, themes } from "../../context/ThemeContext"
import { useContext } from "react"


export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <button onClick={() => { setTheme(theme === themes.light ? themes.dark : themes.light) }} className="w-20 h-8 rounded-2xl relative cursor-pointer" style={{ backgroundColor: theme.togglerRail }}>
            <div
                className={`w-10 h-8 rounded-full bg-stone-950 scale-90 absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${theme === themes.light ? "left-1" : "left-[calc(100%-2.5rem)]"
                    }`}
            ></div>
        </button>
    )
}
