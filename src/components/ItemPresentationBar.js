/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ShadowBox from "./ShadowBox";
import SubHeading from "./SubHeading";
import { font, spacing } from '../style/Styles';
import PlayAudioButton from './PlayAudioButton';

const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo, audioUrl }) => {
    
    const container = ({ colors }) => css`
        color: ${colors.font.primary};
        margin: ${spacing.m};
        display: flex;
        align-items: center;
    `
    const textContainer = css`
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
    `
    const infoContainer = css`
        font-size: ${font.size.s};
        font-weight: ${font.weight.light};
        margin-left: auto;
        min-width: fit-content;
    `
    
    return (
        <article css={container}>
            {imgUrl ? <ShadowBox small><img src={imgUrl} alt={heading} /></ShadowBox> : <PlayAudioButton audioUrl={audioUrl} />}
            <div css={textContainer}>
                <SubHeading>{heading}</SubHeading>
                <p>{description}</p>
            </div>
            <div css={infoContainer}>
                {additionalInfo}
            </div>
        </article>
    );
}

export default ItemPresentationBar;