import querystring from "querystring";

const Login = () => {

    const options = querystring.stringify({
        response_type: "code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: `user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming`,
        redirect_uri: "http://localhost:8888/callback",
        state: "oksdg7f2nk3ufvn0jyhj7kds34fadsf"
    })

    console.log(options);

    return ( 
        <>
            <h1>Login</h1>
            <a href={`https://accounts.spotify.com/authorize?${options}`}>SPOTIFY LOGIN</a>
        </>
     );
}
 
export default Login;