import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import { navigate } from "@reach/router";
import HeadingPrimary from "../components/HeadingPrimary";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { authToken } = useAuth();

    useEffect(() => {
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/featured-playlists", {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}` 
                }
            })
            .then(result => setPlaylists(result.data.playlists.items))
            .catch(error => {
                navigate("/")
                // axios("https://accounts.spotify.com/api/token")           
            })            
        }
    }, [authToken]);

    return (
        <main css={({colors}) => css`background: ${colors.background.primary};`}> 
        <HeadingPrimary>featured</HeadingPrimary>
        {playlists && playlists.map(list => (
            <div key={list.id}>
                <img src={list.images[0].url} alt={list.name} />
            </div>    
        ))}
        <NavigationBar />
        </main>
     );
}
 
export default Featured;