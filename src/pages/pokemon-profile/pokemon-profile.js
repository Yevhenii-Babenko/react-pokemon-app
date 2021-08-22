// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favorPokemon } from "../../redux/selectors/selectors";
import {
  handleFavorites,
} from "../../redux/actions/actions";
import { useLocation } from "react-router-dom";

// useEffect(() => {
//     dispatch(changePath('/pokemon'))
// })

function PokemonProfile() {
  // let paramid = useParams();
  const dispatch = useDispatch();
  //   const singlePoke = useSelector(onePokemon);
  const location = useLocation();
  const favoritePokemon = useSelector(favorPokemon);
  console.log("favorite", favoritePokemon);
  console.log("location", location.state);
  const pokeData = location.state.pokemon;

  const handleClickAddToFavorite = () => {
    if (favoritePokemon.some((item) => item.name === pokeData.name)) {
      const copiedData = [...favoritePokemon];
      const changedFavoritePokemon = copiedData.filter(
        (item) => item.name !== pokeData.name
      );
      dispatch(handleFavorites(changedFavoritePokemon));
      localStorage.setItem("favorites", JSON.stringify(changedFavoritePokemon));
    } else {
      const changedFavoritePokemon = [...favoritePokemon, pokeData];
      dispatch(handleFavorites(changedFavoritePokemon));
      localStorage.setItem("favorites", JSON.stringify(changedFavoritePokemon));
    }
  };
  return (
    // <div>  {/* <Dashboard /> */}
    //   {singlePoke.lenght !== 0 &&
    //     singlePoke.map((pokeData) => {
    //       return (
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
      <button
        onClick={handleClickAddToFavorite}
        type="button"
        style={{
          padding: "20px 40px",
          border: "1px solid green",
          cursor: "pointer",
        }}
      >
        {favoritePokemon.length &&
        favoritePokemon.some((item) => item.name === pokeData.name)
          ? "Remove from favorites"
          : "Add to favorites"}
      </button>
    </div>
  );
  //         })}
  //     </div>
  //   );
}

export default PokemonProfile;
