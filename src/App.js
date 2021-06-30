import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
// import components
import { Sidebar } from "./components/Sidebar";
// import pages
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
function App() {
  const { setShowSidebar } = useGlobalContext();
  return (
    <Router>
      <div className="closed-sidebar">
        <FaBars
          className="toggle-button"
          onClick={() => setShowSidebar(true)}
        />
        <Link to="/">
          <h3 className="closed-sidebar-title">MGames</h3>
        </Link>
      </div>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/games/tictactoe"></Route>
        <Route path="/games/rockpaperscissors"></Route>
        <Route path="/games/snake"></Route>
        <Route path="/games/2048"></Route>
        <Route path="/games/cardmatch"></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
