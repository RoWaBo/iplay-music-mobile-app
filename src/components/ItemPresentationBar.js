/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ShadowBox from "./ShadowBox";
import SubHeading from "./SubHeading";
import { font, spacing } from '../style/Styles';
import PlayAudioButton from './PlayAudioButton';

const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo, audioUrl, skeleton }) => {

    const container = ({ colors }) => css`
        ${skeleton && (`
            height: 60px;
            border-radius: 5px;

            & > :first-of-type {
                margin-left: .4rem;
            }
        `)};     
        color: ${colors.font.primary};
        margin: ${spacing.m};
        display: flex;
        align-items: center;
            
    `
    const textContainer = ({ colors }) => css`
        padding-left: ${spacing.s};

        & h2 {
            ${skeleton && (`
            background: #eaeaea;
            width: 100%;
            height: ${font.size.m};
            border-radius: 3px; 
            `)}
            width: ${imgUrl ? '45vw' : '58vw'};
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; 
        }

        & p {
            ${skeleton && (`
            background: #eaeaea;
            width: 50%;
            height: ${font.size.s};
            border-radius: 3px; 
            `)}
            font-size: ${font.size.s};
            font-weight: ${font.weight.light};
            margin-top: ${spacing.xxs};    
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

    return (
        <li css={container}>
            {skeleton && <ShadowBox small/>}
            {!imgUrl && !skeleton && <PlayAudioButton audioUrl={audioUrl} />}
            {imgUrl && <ShadowBox small><img src={imgUrl} alt={heading} /></ShadowBox>}
            <div css={textContainer}>
                <SubHeading>{heading}</SubHeading>
                <p>{description}</p>
            </div>
            <div css={infoContainer}>
                <p>{additionalInfo}</p>
            </div>
        </li>

    );
}

export default ItemPresentationBar;