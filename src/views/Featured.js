import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../contexts/TokenContextProvider";

const Featured = () => {

    const [playlists, setPlaylists] = useState();
    const { token } = useContext(TokenContext);

    useEffect(() => {
        if (token) {
            axios("https://api.spotify.com/v1/browse/featured-playlists", {
                headers: {
                    "Authorization": token 
                }
            })
            .then(result => setPlaylists(result.data.playlists.items))            
        }
    }, [token]);

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