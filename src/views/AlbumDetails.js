/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeadingPrimary from '../components/HeadingPrimary';
import MainFullViewContainer from '../components/MainFullViewContainer';
import NavigationBar from "../components/NavigationBar"
import useSpotifyApiFetch from "../functions/useSpotifyApiFetch";
import UtilityBar from "../components/UtilityBar";
import { font, spacing } from '../style/Styles';
import SubHeading from '../components/SubHeading';
import ItemPresentationBar from '../components/ItemPresentationBar';
import { decideSingularPlural, convertMsToMAndS } from '../functions/HelperFunctions';

const AlbumDetails = ({ id }) => {

    const album = useSpotifyApiFetch(`https://api.spotify.com/v1/albums/${id}`)

    const backgroundImg = ({ colors }) => css`
        /* background-image: url(${album?.data.images[0].url}); */
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${album?.data.images[0].url});
        max-width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
        color: ${colors.font.secondary};
    `
    const songs = css`
        font-size: ${font.size.m};
        font-weight: ${font.weight.bold};
        padding: 0 ${spacing.m}; 
    `
    const trackContainer = css`
        & > h2 {
            padding: ${spacing.m} ${spacing.m} 0;
        }
    `
    
    return (
        <>
            <MainFullViewContainer>
                <UtilityBar light heading="album" />
                <section css={backgroundImg}>
                    <HeadingPrimary light>{album?.data.name}</HeadingPrimary>
                    <p css={songs}>{decideSingularPlural(album?.data.total_tracks, "Song")}</p>
                </section>
                <section css={trackContainer}>
                    <SubHeading>all songs</SubHeading>
                    {album?.data.tracks.items.map(track => (
                        <ItemPresentationBar
                            key={track.uri} 
                            heading={track.name}
                            description={track.artists[0].name}
                            additionalInfo={convertMsToMAndS(track.duration_ms)}
                            audioUrl={track.preview_url}
                        />    
                    ))}
                </section>
                <NavigationBar />
            </MainFullViewContainer>
        </>
    );
}

export default AlbumDetails;