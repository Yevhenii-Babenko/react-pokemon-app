import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onePokemon } from "../../redux/selectors/selectors";
import { useLocation } from "react-router-dom";

function PokemonProfile() {
  // const singlePoke = useSelector(onePokemon);
  const location = useLocation();
  const currentPokemon = location.state.pokemon;
  console.log(currentPokemon)
  useEffect(() => {
  }, []);

  return (
    <div  className="poke-card">
        <div className="poke-card__img-bg">
            <img 
                src={currentPokemon.sprites.other['official-artwork'].front_default}
                alt="Pokemon"
            />
            <h2>{currentPokemon.name.slice(0,1).toUpperCase() + currentPokemon.name.slice(1)}</h2>
        </div>
        {/* <p>Base Experience {currentPokemon.base_experience}</p>
        <p> {currentPokemon.height}</p>
        <p> {currentPokemon.weight}</p>
        <p>
            {currentPokemon.types.map((poketype, index) => {
            return <span key={index}>{poketype.type.name}</span>;
            })}
        </p>
        <p>
            {currentPokemon.abilities.map((pokeAbility, index) => {
            return <span key={index}>{pokeAbility.ability.name}</span>;})}
              </p> */}
    </div>
  );
}

export default PokemonProfile;
