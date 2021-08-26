import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || localStorage.setItem("theme", "light"))

    return ( 
        <ThemeContext.Provider value={ {theme, setTheme} }>
            { children }
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;