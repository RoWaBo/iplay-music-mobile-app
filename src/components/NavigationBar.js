
import { useTheme } from "../contexts/ThemeContext";

const NavigationBar = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")    
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light") 
        }    
    }

    return ( 
        <div>
            <button onClick={toggleTheme}>Toggle darkmode</button>
        </div>
     );
}
 
export default NavigationBar;