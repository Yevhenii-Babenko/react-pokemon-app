/* import { pokemosApi } from '../../api/axiosApi' */
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=15";

export const getAllPokemons = () => (dispatch) => {
  fetch(baseUrl)
    .then((responce) => responce.json())
    .then((pokemons) => {
      pokemons.results.forEach((pokemon) => {
        let url = pokemon.url;
        fetch(url)
          .then((responce) => responce.json())
          .then((pokeData) => {
            dispatch({
              type: "GET_ALL_POKEMONS",
              payload: pokeData,
            });
          });
      });
    });
};

export const fetchPokeDataById = (id) => (dispatch) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((responce) => responce.json())
    .then((singlePokeData) => {
      dispatch({
        type: "GET_SINGLE_POKEMON_BY_ID",
        payload: singlePokeData,
      });
    });
};

/* pokemosApi.getAllPokemons()
        .then((responce) => {
            dispatch({
                type: 'GET_ALL_POKEMONS',
                payload: responce.data.results,
            })
        }).catch((error) => {
            dispatch({
                type: 'GET_ALL_POKEMONS',
                payload: error
                })
        }) */

export const getPokemonById = (id) => (dispatch) => {
  /* pokemosApi.getSinglePokemon(id)
        .then((responce) => {
            dispatch({
                type: 'GET_SINGLE_POKEMON_BY_ID',
                payload: responce.data.sprites.other['official-artwork'].front_default
            })
        }) */
};

export const handleFavorites = (favorites) => {
  return {
    type: "ADD_POKEMON_TO_FAVORITES",
    payload: favorites,
  };
};
