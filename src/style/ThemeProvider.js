import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */

const Theme = ({ children }) => {

    const light = {
        primary: 'grey'
    }
    const dark = {
        primary: 'black'
    }

    const themePicker = () => {
        console.log(sessionStorage.getItem("darkmode"));
        return sessionStorage.getItem("darkmode") == 'true' ? dark : light
    }

    return ( 
        <ThemeProvider theme={themePicker()}>
            {children}
        </ThemeProvider>
     );
}
 
export default Theme;