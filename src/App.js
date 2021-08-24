// Views
import Login from './views/Login';
import Featured from './views/Featured';
import Callback from './views/Callback';
import Albums from './views/Albums';
import AlbumDetails from './views/AlbumDetails';
import Categories from './views/Categories';
import Player from './views/Player';
import Playlists from './views/Playlists';
// Contexts
import AuthContextProvider from './contexts/AuthContext';
import TokenContextProvider from './contexts/TokenContext';
// Style
import GlobalStyle from './style/GlobalStyle';
// Misc 
import { Router } from '@reach/router';


function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <TokenContextProvider>
          <Router>
            <Featured path="featured" />
            <Login path="/" />
            <Callback path="callback" />
            <Albums path="albums" />
            <AlbumDetails path="album_details" />
            <Categories path="categories" />
            <Playlists path="playlists" />
            <Player path="player" />
          </Router>
        </TokenContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
