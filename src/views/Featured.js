/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import HeadingPrimary from "../components/HeadingPrimary";
import ShadowBox from "../components/ShadowBox";
import { spacing } from "../style/Styles";
import SpotifyApiFetch from "../components/SpotifyApiFetch";
import { Link } from "@reach/router";
import UtilityBar from "../components/UtilityBar";
<<<<<<< Updated upstream

const Featured = () => {

    const playlists = SpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")   

    const contentContainer = css`
        margin: ${spacing.m};
=======
import MainFullViewContainer from "../components/MainFullViewContainer";
import { useEffect, useRef, useState } from "react";

const Featured = () => {
    
    const playlists = useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")
    useSpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists")
        .then(result => console.log(result))
    const lazyLoadeContainer = useRef()
    // const [isLoaded, setIsLoaded] = useState(false)
    // if (playlists) {
    //     const lazyImgs = document.querySelector('.lazyImgContainer').children
    //     console.log(lazyImgs[1]);   
    // }

    useEffect(() => {
        console.log('useEffect is called');
        console.log(lazyLoadeContainer.current.children[2]);
    }, [lazyLoadeContainer])
    
    // Options for IntersectionObserver
    const optionsObject = {
        // loading the img/calling the callbackfunction 200px before img is in viewport
        rootMargin: "0px 0px 200px",
        // THRESHOLD controls when we call the callback function
        // 1 means 100% of the picture is visible
        // Here we have 3 callbacks one at 0%, 50%, 100% img visiblility
        threshold: [0, 0.5, 1]
    }

    // IntersectionObserver takes 2 parameters: a function and an options object
    const lazyImgObserver = new IntersectionObserver(entries => {
        console.log(entries);
        // In this case entries is all observed images
        entries.forEach(entry => {
            // isIntersecting is true if the observed img is in the viewport
            if (entry.isIntersecting) {
                // replaces the placeholder svg with the main img
                entry.target.src = entry.target.dataset.src;
                // removes the attribute which stored the main img url
                entry.target.removeAttribute("data-src");
                // Stops observing the img
                lazyImgObserver.unobserve(entry.target);
            }
        })
    }, optionsObject);

    // Adds IntersectionObserver to all images
    // if (isLoaded === true) {
    //     const lazyImgs = Array.from(lazyLoadeImgs.current.children)
    //     console.log(lazyImgs);
    //     lazyImgs.forEach(lazyImg => lazyImgObserver.observe(lazyImg))    
    // }

    // === STYLING ===
    const contentContainer = ({ colors }) => css`
        margin: 0 ${spacing.m};
        background: ${colors.background.primary};
>>>>>>> Stashed changes

        & > * {
            margin-bottom: ${spacing.xl};    
        }
        & > :last-of-type {
            margin-bottom: 5.5rem;    
        }
    `

    return (
        <main css={({ colors }) => css`background: ${colors.background.primary};`}>
            <UtilityBar heading="Featured" />
            <HeadingPrimary />
<<<<<<< Updated upstream
            <div css={contentContainer}>
=======
            <div css={contentContainer} ref={lazyLoadeContainer}>
>>>>>>> Stashed changes
                {playlists?.data.playlists.items.map(list => (
                    <>
                    <ShadowBox key={list.id}>
                        <Link to={`/playlists/${list.id}`}>
<<<<<<< Updated upstream
                            <img src={list.images[0].url} alt={list.name} />
=======
                            <img src={'/placeholder-image.png'} alt={list.name} data-src={list.images[0].url} className="lazyImg"/>
>>>>>>> Stashed changes
                        </Link>
                    </ShadowBox>
                    </>
                ))}
            </div>
            <NavigationBar />
        </main>
    );
}

export default Featured;