import "./App.css";
import { useEffect } from "react";
import PokemonPage from "./pages/pokemon-page";
import Dashboard from "./components/dashboard";
import { useDispatch } from "react-redux";
import { handleFavorites } from "./redux/actions/actions";
import PokemonProfile from "./pages/pokemon-profile/pokemon-profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      dispatch(handleFavorites(JSON.parse(localStorage.getItem("favorites"))));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  });
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
