import { ThemeProvider } from "@emotion/react";
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from "./ThemeStyles";
// import { useEffect, useState } from "react";
// import { useTheme } from "../contexts/ThemeContext";
/** @jsxImportSource @emotion/react */

const Theme = ({ children }) => {

    const { theme: themeState } = useTheme()

    const themeSelector = () => {
        if (themeState === "light") return lightTheme
        if (themeState === "dark") return darkTheme 
    }

    return (
        <ThemeProvider theme={themeSelector}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;