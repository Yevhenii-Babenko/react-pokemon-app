import './App.css';
import PokemonPage from './pages/pokemon-page';
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <PokemonPage />
    </div>
  );
}

export default App;
