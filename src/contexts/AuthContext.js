import { useContext } from 'react';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); 

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
