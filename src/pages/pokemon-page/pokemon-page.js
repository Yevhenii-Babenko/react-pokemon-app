import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { allPokemons } from "../../redux/selectors/selectors";
import { Heart } from "../../components/images/";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'; */

/* import PokemonProfile from '../pokemon-profile/pokemon-profile'; */
import "./pokemon-page.css";

const pokeStyle = {
  card: {
    width: "320px",
    height: "300px",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  imgContainer: {
    background: "#F2F2F2",
  },
  name: {
    fontSize: "16px",
    color: "red",
  },
  image: {
    width: "75%",
    objectFit: "contain",
  },
  heartHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
  },
};
function PokemonPage() {
  const getPokemons = useSelector(allPokemons);
  const history = useHistory();
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
              to={{
                pathname: "/pokemon",
                state: {
                  pokemon: pokemon,
                },
              }}
            >
              <div
                className="wrapper__item"
                style={pokeStyle.card}
                key={index}
                // onClick={() =>
                //   history.push({
                //     pathname: "/pokemon",
                //     state: {
                //       pokemon: pokemon,
                //     },
                //   })
                // }
              >
                {/* <Link to={`/pokemon-profile/${pokemon.id}`}> */}
                <div style={pokeStyle.imgContainer}>
                  <img
                    style={pokeStyle.image}
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt="Pokemon"
                  />
                </div>
                <div style={pokeStyle.heartHolder}>
                  <h3 style={pokeStyle.name}> {pokemon.name}</h3>
                  <img src={Heart} alt="heart_default" />
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

/* export function NoMatch() {
  return(
    <div>
      <p>Page not found</p>
    </div>
  )
}
 */
export default PokemonPage;
