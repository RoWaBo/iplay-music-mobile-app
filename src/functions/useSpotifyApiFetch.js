import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

const useSpotifyApiFetch = url => {

    const { authToken } = useAuth();

    const [data, setData] = useState(); 

    useEffect(() => {
        if (authToken) {
            axios(url, {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => { 
                    setData(result) 
                })
                .catch(error => { 
                    console.log(error) 
                })                 
        }
    }, [authToken, url])

    return data
}

export default useSpotifyApiFetch;