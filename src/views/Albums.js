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
import { useState } from 'react';

const Albums = () => {

    const [newReleasesLimit, setnewReleasesLimit] = useState(4)

    // Fetches Yussef Dayes albums
    const featuredAlbums = useSpotifyApiFetch("https://api.spotify.com/v1/artists/2rspptKP0lPBdlJJAJHqht/albums?limit=10");

    const newReleases = useSpotifyApiFetch(`https://api.spotify.com/v1/browse/new-releases?limit=${newReleasesLimit}`);

    const toggleViewAll = (e, newLimit) => {
        if (e.target.value === "false") {
            setnewReleasesLimit(newLimit)
            e.target.innerText = "view less"
            e.target.value = "true"
        } else {
            setnewReleasesLimit(4)
            e.target.innerText = "view all"
            e.target.value = "false"    
        }  
    }    

    // === STYLING ===
    const subHeadingContainer = css`
    display: flex;
    align-items: center;
    margin: 0 ${spacing.m};
    `
    const viewAll = ({ colors }) => css`
    color: ${colors.primary};
    background: transparent;
    border: none;
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
                    <button css={viewAll} style={{visibility: 'hidden'}}>view all</button>
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
                    <button css={viewAll} onClick={e => toggleViewAll(e, 50)} value="false">view all</button>
                </header>
                <ul>
                    {newReleases ? ( <>
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
                    </> ) : ( <>
                        <ItemPresentationBar skeleton />
                        <ItemPresentationBar skeleton />
                        <ItemPresentationBar skeleton />
                        <ItemPresentationBar skeleton />
                    </>)}
                </ul>
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Albums;