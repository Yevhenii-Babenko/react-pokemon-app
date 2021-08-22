import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { allPokemons, favorPokemon } from "../../redux/selectors/selectors";
import PokemonCard from '../../components/pokemon-card'
import { Link } from "react-router-dom";
import "./pokemon-page.css";

function PokemonPage() {
  const getPokemons = useSelector(allPokemons);
  const favoritePokemon = useSelector(favorPokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className="container wrapper">
      {getPokemons.length !== 0 &&
        getPokemons.map((pokemon, index) => {
          return (
            <Link
              key={index}
              to={{
                pathname: "/pokemon",
                state: {
                  pokemon: pokemon,
                },
              }}
            >
              <PokemonCard 
                  name={pokemon.name}
                  image={pokemon.sprites.other["official-artwork"].front_default}
                  pokemonInfoObj={favoritePokemon}
                />
            </Link>
          );
        })}
    </div>
  );
}

export default PokemonPage;
