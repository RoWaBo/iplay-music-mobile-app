import { ThemeProvider } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Theme = ({ children }) => {

    const light = {
        primary: 'grey'
    }
    const dark = {
        primary: 'black'
    }

    return ( 
        <ThemeProvider theme={light}>
            {children}
        </ThemeProvider>
     );
}
 
export default Theme;