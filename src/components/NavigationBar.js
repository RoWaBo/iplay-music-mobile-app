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

    const highlightIfCurrent = linkName => {

        const highlight = ({ colors }) => css`
            color: ${colors.font.primary};
        `

        if (window.location.pathname.split("/")[1] === linkName) {
            return highlight   
        } else {
            return ( 
                css`
                fill: url(#gradient-fill); 
                display: initial;
                `
            )            
        }
    }

    // === STYLING ===
    const navBarContainer = ({ colors }) => css`
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

        & > .outerLinks {
            padding: ${spacing.s} ${spacing.m};    
        }

        & > .middelLink {
            font-size: 2.4rem;
        }
    `

    const navLink = ({ colors }) => css`
        font-size: 1.3rem;
        display: grid;
        place-content: center;
    `

    return (
        <>
            <div css={navBarContainer}>
                <Link className="outerLinks" css={navLink} to="/albums">
                    <IoIosPulse css={highlightIfCurrent("albums")} />
                </Link>
                <Link css={navLink} to="/playlists/featured">
                    <IoIosMicrophone css={highlightIfCurrent("playlists")} />
                </Link>
                <Link className="middelLink" css={navLink} to="/featured">
                    <IoIosDisc css={highlightIfCurrent("featured")} />
                </Link>
                <div css={navLink} onClick={toggleTheme}>
                    <IoIosContrast css={highlightIfCurrent()} />
                </div>
                <Link className="outerLinks" css={navLink} to="/categories">
                    <IoIosAlbums css={highlightIfCurrent("categories")} />
                </Link>
            </div>
            <svg width="0" height="0">
                <linearGradient id="gradient-fill" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ee0979" />
                    <stop offset="1" stopColor="#ff6a00" />
                </linearGradient>
            </svg>
        </>
    );
}

export default NavigationBar;