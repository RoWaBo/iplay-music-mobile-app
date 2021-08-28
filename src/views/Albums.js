/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import SpotifyApiFetch from '../components/SpotifyApiFetch';
import ShadowBox from '../components/ShadowBox';
import { Link } from '@reach/router';
import SwipableContainer from '../components/SwipableContainer';
import ItemPresentationBar from '../components/ItemPresentationBar';

const Albums = () => {

    const featuredAlbums = SpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists");

    const newReleases = SpotifyApiFetch("https://api.spotify.com/v1/browse/new-releases?limit=4");

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

    const style = css`
        min-width: 100px;
        min-height: 100px;
    `

    return (
        <main css={({ colors }) => css`background: ${colors.background.primary};`}>
            <UtilityBar heading="music" />
            <HeadingPrimary>all albums</HeadingPrimary>
            <section>
                <div css={subHeadingContainer}>
                    <SubHeading>featured albums</SubHeading>
                    <p css={viewAll}>view all</p>
                </div>
                <SwipableContainer>
                    {featuredAlbums?.data.playlists.items.map(list => (
                        <Link to="/album_details">
                            <ShadowBox>
                                <img src={list.images[0].url} alt={list.name} />
                            </ShadowBox>
                        </Link>
                    ))}
                </SwipableContainer>
            </section>
            <section css={css`margin: ${spacing.s} 0 ${spacing.xxl};`}>
                <div css={subHeadingContainer}>
                    <SubHeading>new releases</SubHeading>
                    <p css={viewAll}>view all</p>
                </div>
                {newReleases?.data.albums.items.map(album => (
                    <Link to={`/album_details/${album.id}`} key={album.id}>
                        <ItemPresentationBar 
                            imgUrl={album.images[2].url}
                            heading={album.name}
                            description={album.artists[0].name}
                            additionalInfo={album.total_tracks + " songs"}
                        />
                    </Link>    
                ))}
            </section>
            <NavigationBar />
        </main>
    );
}

export default Albums;