
import { useDispatch, useSelector } from "react-redux";
import { favorPokemon } from "../../redux/selectors/selectors";
import { handleFavorites } from "../../redux/actions/actions";
import { useLocation } from "react-router-dom";
import { HeartDefaultWhite } from '../../components/images';
import './pokemon-profile.css'

function PokemonProfile() {
  const dispatch = useDispatch();
  const location = useLocation();
  const favoritePokemon = useSelector(favorPokemon);
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
    <div key={pokeData.id} className="profile">
      <div className="img__container img__bg">
        <img
          className="img__style"
          src={pokeData.sprites.other.dream_world.front_default}
          alt="Pokemon img"
        />
        <h2 
          className="profile__name"
        >
          {pokeData.name.slice(0,1).toUpperCase() + pokeData.name.slice(1)}
        </h2>
      </div>
      <div className="profile-info">
        <div className="profile-info__items">
          <p className="profile-info__name"> Base Experience </p>
          <p className="profile-info__values"> {`${pokeData.base_experience} XP`} </p>
        </div>
        <div className="profile-info__items">
          <p className="profile-info__name"> Height </p>
          <p className="profile-info__values"> {`${pokeData.height} m`}</p>
        </div>
        <div className="profile-info__items">
          <p className="profile-info__name"> Weight </p>
          <p className="profile-info__values"> {`${pokeData.weight} kg`}</p>
        </div>
        <div className="profile-info__items">
          <p className="profile-info__name"> Types </p>
          <p className="profile-info__values">
            {pokeData.types.map((poketype, index) => <span className="profile-info__discription" key={index}>{poketype.type.name}</span> )}
          </p>
        </div>
        <div className="profile-info__items">
          <p className="profile-info__name"> Abilities </p>
          <p className="profile-info__values">
            {pokeData.abilities.map((pokeAbility, index) =>  <span className="profile-info__discription" key={index}>{pokeAbility.ability.name}</span>) }
          </p>
        </div>
      </div>
      <div className="btn-container">
        <button
          style={ 
              favoritePokemon.some((item) => item.name === pokeData.name) ?
              {
                background: "#fff",
                border: "2px solid #7EB57E",
                color: '#7EB57E',
                cursor: "pointer",
                padding: "25px 40px",
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '20px',
              }:
              {
                background: '#7EB57E',
                cursor: "pointer",
                padding: "20px 40px"
              }   
          }
          className="profile-btn"
          onClick={handleClickAddToFavorite}
          type="button"
        >
          {favoritePokemon.length &&
          favoritePokemon.some((item) => item.name === pokeData.name)
            ? 'Remove from favorites'
            : <AddToFavorites 
              className="profile-btn__img" 
              innerStyle="style_text_add_favor" 
              flexStyle="d-flex-span-btn"
            />}
        </button>
      </div>
    </div>
  );
}

const AddToFavorites = (props) => {
  console.log('porops', props)
  return(
    <span className={`${props.innerStyle} ${props.flexStyle}`}>
      <img 
        className={props.className}
        src={HeartDefaultWhite} 
        alt="Heart default white"
      />
        Add to Favorites
    </span>
  )
}

export default PokemonProfile;
