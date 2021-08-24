import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    if (authToken) {
      sessionStorage.setItem('authToken', JSON.stringify(authToken));
    } else {
      setAuthToken(JSON.parse(sessionStorage.getItem('authToken')));
    }
  }, [authToken]);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
