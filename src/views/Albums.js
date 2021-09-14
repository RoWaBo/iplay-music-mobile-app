/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { font, spacing } from '../style/Styles';
import NavigationBar from '../components/NavigationBar';
import HeadingPrimary from '../components/HeadingPrimary';
import UtilityBar from '../components/UtilityBar';
import SubHeading from '../components/SubHeading';
import SwipableContainer from '../components/SwipableContainer';
import MainFullViewContainer from "../components/MainFullViewContainer";
import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import FeaturedAlbums from '../components/FeaturedAlbums';
import NewAlbumReleases from '../components/NewAlbumReleases';

const Albums = () => {

    const [newReleasesLimit, setnewReleasesLimit] = useState(4)

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
                    <button css={viewAll} style={{ visibility: 'hidden' }}>view all</button>
                </header>
                <SwipableContainer>
                    <ErrorBoundary message="No featured albums could be found">
                        <FeaturedAlbums />
                    </ErrorBoundary>
                </SwipableContainer>
            </section>
            <section css={css`margin: ${spacing.s} 0;`}>
                <header css={subHeadingContainer}>
                    <SubHeading>new releases</SubHeading>
                    <button css={viewAll} onClick={e => toggleViewAll(e, 50)} value="false">view all</button>
                </header>
                <ErrorBoundary message="No new albums releases could be found">
                    <ul>
                        <NewAlbumReleases limit={newReleasesLimit} />
                    </ul>
                </ErrorBoundary>
            </section>
            <NavigationBar />
        </MainFullViewContainer>
    );
}

export default Albums;