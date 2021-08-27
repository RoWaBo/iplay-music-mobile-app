import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import { navigate } from "@reach/router";
import HeadingPrimary from "../components/HeadingPrimary";
import ShadowBox from "../components/ShadowBox";
import { spacing } from "../style/Styles";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { authToken } = useAuth();

    useEffect(() => {
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/featured-playlists", {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => setPlaylists(result.data.playlists.items))
                .catch(error => {
                    navigate("/")
                    // axios("https://accounts.spotify.com/api/token")           
                })
        }
    }, [authToken]);

    const contentContainer = css`
        margin: ${spacing.m};

        & > * {
            margin-bottom: ${spacing.xl};    
        }
        & > :last-of-type {
            margin-bottom: 5.5rem;    
        }
    `

    return (
        <main css={({ colors }) => css`background: ${colors.background.primary};`}>
            <HeadingPrimary />
            <div css={contentContainer}>
                {playlists && playlists.map(list => (
                    <ShadowBox key={list.id}>
                        <img src={list.images[0].url} alt={list.name} />
                    </ShadowBox>
                ))}
            </div>
            <NavigationBar />
        </main>
    );
}

export default Featured;