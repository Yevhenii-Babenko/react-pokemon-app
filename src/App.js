import "./App.css";
import PokemonPage from "./pages/pokemon-page";
import Dashboard from "./components/dashboard";
import PokemonProfile from "./pages/pokemon-profile/pokemon-profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        <Switch>
          <Route path="/pokemon">
            <PokemonProfile />
          </Route>
          <Route path="/">
            <PokemonPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
