import { Router } from "@reach/router";
import TokenContextProvider from "./contexts/TokenContextProvider";
import Featured from "./views/Featured";
import Login from "./views/Login";

function App() {
  return (
    <>
      <TokenContextProvider>
        <Router>
          <Featured path="featured"/>
          <Login path="login" />
        </Router>
      </TokenContextProvider>
    </>
  );
}

export default App;
