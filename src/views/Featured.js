import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavigationBar from "../components/NavigationBar";
import { navigate } from "@reach/router";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { authToken } = useAuth();

    useEffect(() => {
        console.log(authToken);
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

    playlists && console.log(playlists);

    return (
        <> 
        <h1 css={theme => ({ color: theme.primary })}>Featured</h1>
        {playlists && playlists.map(list => (
            <div key={list.id}>
                <h1>{list.name}</h1>
                <img src={list.images[0].url} alt={list.name} />
            </div>    
        ))}
        <NavigationBar />
        </>
     );
}
 
export default Featured;