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

        & > :first-child, & > :last-child {
            padding: ${spacing.s} ${spacing.m};    
        }

        & > :nth-child(3) {
            font-size: 2.4rem;
        }
    `
    const navLink = ({ colors }) => css`
        font-size: 1.3rem;
        display: grid;
        place-content: center;
    `

    const highlightCurrent = linkName => {
    
        if (window.location.pathname === linkName) {
            return (
                { color: "black" }    
            )    
        } else {
            return (
                { fill: "url(#gradient-fill)", display: "initial" }    
            )            
        }
    }

    return (
        <>
            <div css={navBarContainer}>
                <Link css={navLink} to="/albums">
                    <IoIosPulse style={highlightCurrent("/albums")} />
                </Link>
                <Link css={navLink} to="/playlists">
                    <IoIosMicrophone style={highlightCurrent("/playlists")} />
                </Link>
                <Link css={navLink} to="/featured">
                    <IoIosDisc style={highlightCurrent("/featured")} />
                </Link>
                <div css={navLink} onClick={toggleTheme}>
                    <IoIosContrast style={highlightCurrent()} />
                </div>
                <Link css={navLink} to="/categories">
                    <IoIosAlbums style={highlightCurrent("/categories")} />
                </Link>
            </div>
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <linearGradient id="gradient-fill" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">

                    <stop offset="0" stopColor="#ee0979" />

                    <stop offset="0.14285714285714285" stopColor="#f7126c" />

                    <stop offset="0.2857142857142857" stopColor="#fd205f" />

                    <stop offset="0.42857142857142855" stopColor="#ff2f51" />

                    <stop offset="0.5714285714285714" stopColor="#ff3e43" />

                    <stop offset="0.7142857142857142" stopColor="#ff4d33" />

                    <stop offset="0.8571428571428571" stopColor="#ff5c21" />

                    <stop offset="1" stopColor="#ff6a00" />

                </linearGradient>
            </svg>
        </>
    );
}

export default NavigationBar;