import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Callback = ({ location }) => {
    
    const { setAuthToken } = useContext(AuthContext);

    let code = new URLSearchParams(location.search).get("code")
    let state = new URLSearchParams(location.search).get("state")

    useEffect(() => {
        axios.post("/.netlify/functions/token",
            JSON.stringify({
                code,
                state
            })
            .then(response => { 
                setAuthToken(response.data)
                navigate("/featured")
            })
        )
    }, []);

    return null;
}
 
export default Callback;