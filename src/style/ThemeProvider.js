import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
/** @jsxImportSource @emotion/react */

const Theme = ({ children }) => {

    const { theme } = useTheme()

    const light = {
        primary: 'grey'
    }
    const dark = {
        primary: 'black'
    }

    return ( 
        <ThemeProvider theme={localStorage.getItem("theme") === "light" ? light : dark}>
            {children}
        </ThemeProvider>
     );
}
 
export default Theme;