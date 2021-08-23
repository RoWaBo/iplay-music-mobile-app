import { Router } from "@reach/router";
import TokenContextProvider from "./contexts/TokenContextProvider";
import Featured from "./Featured";

function App() {
  return (
    <>
      <TokenContextProvider>
        <Router>
          <Featured path="/"/>
        </Router>
      </TokenContextProvider>
    </>
  );
}

export default App;
