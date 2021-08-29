/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import HeadingPrimary from "../components/HeadingPrimary";
import ShadowBox from "../components/ShadowBox";
import { spacing } from "../style/Styles";
import SpotifyApiFetch from "../components/SpotifyApiFetch";
import { Link } from "@reach/router";
import UtilityBar from "../components/UtilityBar";
import MainFullViewContainer from "../components/MainFullViewContainer"; 

const Featured = () => {

    const playlists = SpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")   

    const contentContainer = ({ colors }) => css`
        margin: ${spacing.m};
        background: ${colors.background.primary};

        & > * {
            margin-bottom: ${spacing.xl};    
        }
        & > :last-of-type {
            margin-bottom: 5.5rem;    
        }
    `

    return (
        <MainFullViewContainer>
            <UtilityBar heading="Featured" />
            <HeadingPrimary />
            <div css={contentContainer}>
                {playlists?.data.playlists.items.map(list => (
                    <ShadowBox key={list.id}>
                        <Link to={`/playlists/${list.id}`}>
                            <img src={list.images[0].url} alt={list.name} />
                        </Link>
                    </ShadowBox>
                ))}
            </div>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Featured;