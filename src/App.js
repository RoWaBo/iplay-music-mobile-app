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
import ThemeContextProvider from './contexts/ThemeContext';
// Style
import GlobalStyle from './style/GlobalStyle';
import Theme from './style/ThemeProvider';
// Misc 
import { Router } from '@reach/router';


function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <ThemeContextProvider>
          <Theme>
            <Router>
              <Featured path="featured" />
              <Login path="/" />
              <Callback path="callback" />
              <Albums path="albums" />
              <AlbumDetails path="album_details" />
              <Categories path="categories" />
              <Playlists path="playlists/:playlistId" />
              <Player path="player" />
            </Router>
          </Theme>
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
