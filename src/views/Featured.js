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
import { useRef } from "react";

const Featured = () => {

    const playlists = useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")
    const lazyLoadeParent = useRef()

    // Options for IntersectionObserver
    const optionsObject = {
        // loading the img/calling the callbackfunction -200px before img is in viewport
        rootMargin: "0px 0px -200px",
        // THRESHOLD controls when we call the callback function
        // 1 means 100% of the picture is visible
        // Here we have 3 callbacks one at 0%, 50%, 100% img visiblility 
        threshold: [0, 0.5, 1]
    }

    // IntersectionObserver takes 2 parameters: a function and an options object
    const lazyImgObserver = new IntersectionObserver(entries => {
        // In this case entries is all observed images
        entries.forEach(entry => {
            const img = entry.target.querySelector('img')
            // isIntersecting is true if the observed img is in the viewport
            if (entry.isIntersecting) {
                // replaces the placeholder svg with the main img 
                img.src = img.dataset.src
                // removes the attribute which stored the main img url 
                img.removeAttribute("data-src");
                // Stops observing the img 
                lazyImgObserver.unobserve(entry.target);
            }
        })
    }, optionsObject);

    // Adds IntersectionObserver to all images
    function applyObserver() {
        const lazyImgs = Array.from(lazyLoadeParent.current.children) 
        lazyImgs.forEach(lazyImg => lazyImgObserver.observe(lazyImg))   
    }

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
            <div css={contentContainer} ref={lazyLoadeParent}>
                {playlists?.data.playlists.items.map((list, index) => (
                    <div key={list.id}>
                        <ShadowBox >
                            <Link to={`/playlists/${list.id}`}>
                                <img src={'/placeholder-image.png'} alt={list.name} data-src={list.images[0].url} />
                            </Link>
                        </ShadowBox>
                        {index === playlists.data.playlists.items.length - 1 && applyObserver()}
                    </div>
                ))}
            </div>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Featured;