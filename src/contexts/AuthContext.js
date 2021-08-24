import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState();

    return ( 
        <AuthContext.Provider value={ {authToken, setAuthToken} }>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;