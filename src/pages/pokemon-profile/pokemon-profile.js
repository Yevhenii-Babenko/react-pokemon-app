import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onePokemon } from "../../redux/selectors/selectors";
import { fetchPokeDataById } from "../../redux/actions/actions";
import { useLocation } from "react-router-dom";
import Dashboard from "../../components/dashboard";
import { NoMatch } from "../pokemon-page/pokemon-page";

function PokemonProfile() {
  let paramid = useParams();
  const dispatch = useDispatch();
  const singlePoke = useSelector(onePokemon);
  const location = useLocation();
  console.log("location", location.state);

  useEffect(() => {
    dispatch(fetchPokeDataById(paramid.id));
  }, [dispatch]);

  return (
    <div>
      {/* <Dashboard /> */}
      {singlePoke.lenght !== 0 &&
        singlePoke.map((pokeData) => {
          return (
            <div key={pokeData.id}>
              <img
                src={pokeData.sprites.other.dream_world.front_default}
                alt="Pokemon img"
              />
              <h2>{pokeData.name}</h2>
              <p>Base Experience {pokeData.base_experience}</p>
              <p> {pokeData.height}</p>
              <p> {pokeData.weight}</p>
              <p>
                {" "}
                {pokeData.types.map((poketype, index) => {
                  return <span key={index}>{poketype.type.name}</span>;
                })}
              </p>
              <p>
                {" "}
                {pokeData.abilities.map((pokeAbility, index) => {
                  return <span key={index}>{pokeAbility.ability.name}</span>;
                })}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default PokemonProfile;
