import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        console.log(authToken);
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/featured-playlists", {
                headers: {
                    "Authorization": authToken 
                }
            })
            .then(result => setPlaylists(result.data.playlists.items))            
        }
    }, [authToken]);

    playlists && console.log(playlists);

    return (
        <> 
        <h1>Featured</h1>
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