/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const MainFullViewContainer = ({ children }) => {

    const style = ({ colors }) => css`
            background: ${colors.background.primary};
        `    

    return <main css={style}>{ children }</main>

}
 
export default MainFullViewContainer;