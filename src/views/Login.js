/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import querystring from "querystring";
import NavigationBar from "../components/NavigationBar";

const Login = () => {

    const options = querystring.stringify({
        response_type: "code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: `user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming`,
        redirect_uri: "http://localhost:8888/callback",
        state: "oksdg7f2nk3ufvn0jyhj7kds34fadsf"
    })

    const background = ({ colors }) => css`
        background: ${colors.background.tertiary}
    `

    return ( 
        <main css={background}>
            <h1>Login</h1>
            <a href={`https://accounts.spotify.com/authorize?${options}`}>SPOTIFY LOGIN</a>
            <NavigationBar />
        </main>
     );
}
 
export default Login;