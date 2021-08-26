import { ThemeProvider } from "@emotion/react";
import { useTheme } from "../contexts/ThemeContext";
// import { useEffect, useState } from "react";
// import { useTheme } from "../contexts/ThemeContext";
/** @jsxImportSource @emotion/react */

const Theme = ({ children }) => {

    const { theme: themeState } = useTheme()

    const theme = () => {
        if (themeState === "light") {
            return {
                colors: {
                    primary: "#FF1168",
                    secondary: "#341931",
                    additional: "#111625",
                    gradient: "linear-gradient(266deg, rgba(255,106,0,1) 0%, rgba(238,9,121,1) 100%)",
                    background: {
                        primary: "#FFF",
                        secondary: "#FFF",
                        tertiary: "#FFF"
                    }
                }
            }
        } else {
            return {
                colors: {
                    primary: "#FF1168",
                    secondary: "#341931",
                    additional: "#111625",
                    gradient: "linear-gradient(266deg, rgba(255,106,0,1) 0%, rgba(238,9,121,1) 100%)",
                    background: {
                        primary: "#341931",
                        secondary: "#111625",
                        tertiary: "#FF1168"
                    }
                }    
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;