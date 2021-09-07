/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ShadowBox from "./ShadowBox";
import SubHeading from "./SubHeading";
import { font, spacing } from '../style/Styles';
import PlayAudioButton from './PlayAudioButton';
import { Link } from '@reach/router';

const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo, audioUrl, tracksUrl, trackNumber }) => {

    const container = ({ colors }) => css`
        color: ${colors.font.primary};
        margin: ${spacing.m};
        display: flex;
        align-items: center;
    `
    const textContainer = ({ colors }) => css`
        padding-left: ${spacing.s};

        & h2 {
            width: ${imgUrl ? '45vw' : '58vw'} ;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;            
        }

        & p {
            font-size: ${font.size.s};
            font-weight: ${font.weight.light};
            padding-top: ${spacing.xxs};    
        }

        & a {
            color: ${colors.font.primary};    
        }
    `
    const infoContainer = ({ colors }) => css`
        font-size: ${font.size.s};
        font-weight: ${font.weight.light};
        margin-left: auto;
        min-width: fit-content;

        & a {
            color: ${colors.font.primary};    
        }
    `

    const linkStyle = css`
        width: 100%;
        height: 100%;
    `

    return (
        <article css={container}>
            {imgUrl ? <ShadowBox small><img src={imgUrl} alt={heading} /></ShadowBox> : <PlayAudioButton audioUrl={audioUrl} />}
            <div css={textContainer}>
                {tracksUrl ? (
                <Link css={linkStyle} to={`/player/${encodeURIComponent(tracksUrl)}/${trackNumber}`}>
                    <SubHeading>{heading}</SubHeading>
                    <p>{description}</p>
                </Link>                    
                ) : (
                <>
                    <SubHeading>{heading}</SubHeading>
                    <p>{description}</p>
                </>    
                )}
            </div>
            <div css={infoContainer}>
            {tracksUrl ? (
                <Link css={linkStyle} to={`/player/${encodeURIComponent(tracksUrl)}/${trackNumber}`}>
                    <p>{additionalInfo}</p>
                </Link>                    
                ) : (
                <>
                    <p>{additionalInfo}</p>
                </>    
                )}
            </div>

        </article>
    );
}

export default ItemPresentationBar;