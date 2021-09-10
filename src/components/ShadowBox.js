/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ShadowBox = ({ children, xSmall, small, medium, circle }) => {

    const defaultSize = `min-width: 130px; min-height: 130px;`        
    const mediumSize = `
        min-width: 155px; 
        min-height: 155px;
        max-width: 155px; 
        max-height: 155px;
    `        
    const smallSize = `
        min-width: 50px; 
        min-height: 50px;
        max-width: 50px; 
        max-height: 50px;
    `        
    const xSmallSize = `
        min-width: 40px; 
        min-height: 40px;
        max-width: 40px; 
        max-height: 40px;
    `        
    
    const styling = css`
        ${small && smallSize};
        ${medium && mediumSize};
        ${xSmall && xSmallSize};
        ${!small && !medium && !xSmall && defaultSize};
        border-radius: ${circle ? "50%" : "8px"};
        box-shadow: 0px 0px 25px #00000026;
        overflow: hidden;
        object-fit: cover;

        /* Placeholder image */
        background-image: url(/placeholder-image.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    `

    return ( 
        <div css={styling}>
            { children }
        </div>
     );
}
 
export default ShadowBox;