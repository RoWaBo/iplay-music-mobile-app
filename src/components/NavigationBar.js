/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "../contexts/ThemeContext";
import { Link } from '@reach/router'
import { IoIosPulse, IoIosMicrophone, IoIosDisc, IoIosContrast, IoIosAlbums } from 'react-icons/io'
import { spacing } from '../style/Styles';

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

    const navBarContainer = ({colors}) => css`
        background: ${colors.background.secondary};
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        width: 100%;
        box-shadow: 0px -5px 25px #00000026;

        & > * {
            padding: 0 ${spacing.s};    
        }

        & > :first-child, & > :last-child {
            padding: ${spacing.s} ${spacing.m};    
        }

        & > :nth-child(3) {
            font-size: 2.4rem;
        }
    `
    const navLink = ({colors}) => css`
        font-size: 1.3rem;
        display: grid;
        place-content: center;
        color: #EE0979;
    `

    return ( 
        <div css={navBarContainer}>
            <Link css={navLink} to="/albums">
                <IoIosPulse />
            </Link>    
            <Link css={navLink} to="/playlists">
                <IoIosMicrophone />
            </Link>    
            <Link css={navLink} to="/featured">
                <IoIosDisc />
            </Link>
            <div css={navLink} onClick={toggleTheme}>
                <IoIosContrast />
            </div>    
            <Link css={navLink} to="/categories">
                <IoIosAlbums />
            </Link>    
        </div>
     );
}
 
export default NavigationBar;