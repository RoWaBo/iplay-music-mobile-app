/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import MainFullViewContainer from '../components/MainFullViewContainer';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { font, spacing } from '../style/Styles';
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from '@reach/router';
import { IoIosArrowForward } from 'react-icons/io';


const Categories = () => {

    const [categoryId, setCategoryId] = useState();
    const [isOpened, setIsOpened] = useState("false");
    const [categoryPlaylists, setCategoryPlaylists] = useState();
    const { authToken } = useAuth();

    const allCategories = useSpotifyApiFetch("https://api.spotify.com/v1/browse/categories")?.data.categories.items

    // Fetch category playlists if category is selected
    useEffect(() => {
        if (authToken && categoryId) {
            axios(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => { 
                    setCategoryPlaylists(result.data.playlists.items)
                })
                .catch(error => { 
                    console.log(error) 
                })                 
        }
    }, [categoryId, authToken])

    const toggle = (category, e) => {

        if (e.target.value === "false") {
            e.target.value = "true"
            setIsOpened(true)
            setCategoryId(category)
        } else {
            e.target.value = "false"
            setIsOpened(false)
            setCategoryId("")
        }
    }

    // === STYLING ===
    const categoryContainer = ({ colors }) => css`
        padding: 0 ${spacing.m};

        & > * {
            margin-bottom: ${spacing.s};
        }
    `
    const categoryButton = ({ colors }) => css`
        color: ${colors.font.secondary};
        background: grey;
        padding: ${spacing.xs} ${spacing.m};
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 8px;
        border: none;

        & h2 {
            color: ${colors.font.secondary};
        }

        & svg {
            margin-left: auto;
            color: ${colors.font.secondary};
            font-size: ${font.size.xl}; 
        }

        & > * {
            pointer-events: none;
        }
    `

    const categoryPlaylistLink = ({ colors }) => css`
        color: ${colors.font.primary};
        display: flex;
        align-items: center;
        padding: ${spacing.m} ${spacing.m} 0;

        & h3 {
            font-size: ${font.size.m};
            font-weight: ${font.weight.light};
            margin-right: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; 
        }
    `

    const categoryColors = ["#D70060", "#E54028", "#F18D05", "#F2BC06", "#5EB11C", "#3A7634", "#0ABEBE", "#00A1CB", "#115793"]

    return (
        <MainFullViewContainer>
            <UtilityBar heading="categories" />
            <HeadingPrimary />
            <section css={categoryContainer}>
                {allCategories?.map((category, index) => index <= 8 && (
                    <article key={category.id + index}>
                        <button style={{ background: categoryColors[index] }} css={categoryButton} onClick={ e => toggle(category.id, e)} value="false">
                            <SubHeading>{category.name}</SubHeading>
                            <HiOutlineDotsHorizontal />
                        </button>
                        {isOpened && categoryId === category.id && categoryPlaylists?.map(playlist => (
                            <Link to={`/playlists/${playlist.id}`} key={playlist.id} css={categoryPlaylistLink}>
                                <h3>{playlist.name}</h3>
                                <IoIosArrowForward />    
                            </Link>   
                        ))}
                    </article>
                ))}
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Categories;