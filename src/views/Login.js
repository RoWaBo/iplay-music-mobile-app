/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import querystring from "querystring";
import { bigButtonStyle } from '../style/bigButtonStyle';
import { font, spacing } from '../style/Styles';

const Login = () => {

    const options = querystring.stringify({
        response_type: "code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: `user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming`,
        redirect_uri: "http://localhost:8888/callback",
        state: "oksdg7f2nk3ufvn0jyhj7kds34fadsf"
    })

    const background = ({ colors }) => css`
        background: ${colors.background.tertiary};
        width: 100vw;
        height: 100vh;
        padding: ${spacing.m};
        color: ${colors.font.primary};
        display: grid;
    `

    return ( 
        <main css={background}>
            <h1 css={css`font-size: ${font.size.xl}; font-weight: ${font.weight.bold};`}>Log In</h1>
            <div css={css`align-self: center;`}> 
            <a css={bigButtonStyle} href={`https://accounts.spotify.com/authorize?${options}`}>log in with spotify</a>
            </div>
        </main>
     );
}
 
export default Login;