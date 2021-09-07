/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import useSpotifyApiFetch from '../functions/useSpotifyApiFetch';
import ShadowBox from '../components/ShadowBox';
import { Link } from '@reach/router';
import SwipableContainer from '../components/SwipableContainer';
import ItemPresentationBar from '../components/ItemPresentationBar';
import MainFullViewContainer from "../components/MainFullViewContainer";
import { decideSingularPlural } from '../functions/HelperFunctions';

const Albums = () => {

    // Fetches Yussef Dayes albums
    const featuredAlbums = useSpotifyApiFetch("https://api.spotify.com/v1/artists/2rspptKP0lPBdlJJAJHqht/albums?limit=10");

    const newReleases = useSpotifyApiFetch("https://api.spotify.com/v1/browse/new-releases?limit=4");

    // === STYLING ===
    const subHeadingContainer = css`
    display: flex;
    align-items: center;
    margin: 0 ${spacing.m};
    `
    const viewAll = ({ colors }) => css`
    color: ${colors.primary};
    font-size: ${font.size.m};
    font-weight: ${font.weight.light};
    text-transform: capitalize;
    margin-left: auto;
    cursor: pointer;
    `

    return (
        <MainFullViewContainer>
            <UtilityBar heading="albums" />
            <HeadingPrimary>all albums</HeadingPrimary>
            <section>
                <header css={subHeadingContainer}>
                    <SubHeading>featured albums</SubHeading>
                    <p css={viewAll}>view all</p>
                </header>
                <SwipableContainer>
                    {featuredAlbums?.data.items.map(album => (
                        <Link to={`/album_details/${album.id}`} key={album.id}>
                            <ShadowBox>
                                <img src={album.images[0].url} alt={album.name} />
                            </ShadowBox>
                        </Link>
                    ))}
                </SwipableContainer>
            </section>
            <section css={css`margin: ${spacing.s} 0;`}>
                <header css={subHeadingContainer}>
                    <SubHeading>new releases</SubHeading>
                    <p css={viewAll}>view all</p>
                </header>
                <ul>
                    {newReleases?.data.albums.items.map(album => (
                        <Link to={`/album_details/${album.id}`} key={album.id}>
                            <ItemPresentationBar
                                imgUrl={album.images[2].url}
                                heading={album.name}
                                description={album.artists[0].name}
                                additionalInfo={decideSingularPlural(album.total_tracks, "Song")}
                            />
                        </Link>
                    ))}
                </ul>
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Albums;