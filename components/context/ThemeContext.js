import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = true;

const ThemeProvier = ({children}) => {
    const [theme, setTheme] = useState(initialTheme)
    const handleTheme = e => {
        setTheme(!theme)
    }
    const data = {theme, handleTheme};
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvier }
export default ThemeContext