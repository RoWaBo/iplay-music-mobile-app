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

const Albums = () => {

    const featuredAlbums = SpotifyApiFetch("https://api.spotify.com/v1/browse/featured-playlists");

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
            <div css={subHeadingContainer}>
                <SubHeading>featured albums</SubHeading>
                <p css={viewAll}>view all</p>
            </div>
            <SwipableContainer>
                {featuredAlbums?.data.playlists.items.map(list => (
                    <img css={style} src={list.images[0].url} alt={list.name} />
                ))}
            </SwipableContainer>
            <NavigationBar />
        </main>
    );
}

export default Albums;