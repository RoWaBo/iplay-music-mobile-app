import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {

    // axios(authOptions).then(result => setToken(result.data));
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic " + btoa(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials',
    })
        .then(response => response.json())
        .then(result => setToken(`${result.token_type} ${result.access_token}`))
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
};

export default TokenContextProvider;
