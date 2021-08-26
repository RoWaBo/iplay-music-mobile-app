import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from "../contexts/ThemeContext";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { authToken } = useAuth();
    const { theme, setTheme } = useTheme();

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
                // axios("https://accounts.spotify.com/api/token")           
            })            
        }
    }, [authToken]);

    playlists && console.log(playlists);

    const toggleTheme = () => {
        console.log(theme);
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")    
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light") 
        }    
    }

    return (
        <> 
        <h1 css={theme => ({ color: theme.primary })}>Featured</h1>
        <button onClick={toggleTheme}>Toggle darkmode</button>
        {playlists && playlists.map(list => (
            <div key={list.id}>
                <h1>{list.name}</h1>
                <img src={list.images[0].url} alt={list.name} />
            </div>    
        ))}
        </>
     );
}
 
export default Featured;