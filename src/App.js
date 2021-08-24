import { Router } from '@reach/router';
import Featured from './views/Featured';
import Login from './views/Login';
import AuthContextProvider from './contexts/AuthContext';
import TokenContextProvider from './contexts/TokenContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <TokenContextProvider>
          <Router>
            <Featured path="featured" />
            <Login path="login" />
          </Router>
        </TokenContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
