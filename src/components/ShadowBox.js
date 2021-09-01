/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ShadowBox = ({ children, small, medium }) => {

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
    
    const styling = css`
        ${small && smallSize};
        ${medium && mediumSize};
        ${!small && !medium && defaultSize};
        border-radius: 8px;
        box-shadow: 0px 0px 25px #00000026;
        overflow: hidden;
        object-fit: cover;
    `

    return ( 
        <div css={styling}>
            { children }
        </div>
     );
}
 
export default ShadowBox;