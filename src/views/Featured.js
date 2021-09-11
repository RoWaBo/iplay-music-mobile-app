/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import HeadingPrimary from "../components/HeadingPrimary";
import ShadowBox from "../components/ShadowBox";
import { spacing } from "../style/Styles";
import useSpotifyApiFetch from "../functions/useSpotifyApiFetch";
import { Link } from "@reach/router";
import UtilityBar from "../components/UtilityBar";
import MainFullViewContainer from "../components/MainFullViewContainer";
import { useEffect, useRef } from "react";
import { lazyImgObserver } from "../functions/HelperFunctions";

const Featured = () => {

    const playlists = useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")
    const lazyLoadeParent = useRef()

    // Adds IntersectionObserver to all images
    useEffect(() => {
        if (playlists) {
            const lazyImgs = Array.from(lazyLoadeParent.current.children)
            lazyImgs.forEach(lazyImg => lazyImgObserver.observe(lazyImg))
        }
    }, [playlists])

    // === STYLING ===
    const contentContainer = ({ colors }) => css`
        margin: 0 ${spacing.m};
        background: ${colors.background.primary};
        & > * {
            margin-bottom: ${spacing.xl};    
        }
    `
    return (
        <MainFullViewContainer>
            <UtilityBar heading="Featured" />
            <HeadingPrimary />
            <ul css={contentContainer} ref={lazyLoadeParent}>
                {playlists?.data.playlists.items.map(list => (
                    <li key={list.id}>
                        <ShadowBox>
                            <Link to={`/playlists/${list.id}`}>
                                <img src={'/placeholder-image.png'} alt={list.name} data-src={list.images[0].url} />
                            </Link>
                        </ShadowBox>
                    </li>
                ))}
            </ul>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Featured;