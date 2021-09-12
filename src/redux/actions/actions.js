// import { pokemosApi } from '../../api/axiosApi';
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=8";

export const getAllPokemons = () => async (dispatch) => {
  try {
    const response = await fetch(baseUrl)
    const data = await response.json();
    console.log('data from async/await fetch: ', data)
    data.results.forEach((poremon) => console.log(poremon.url))
    try {
      data.results.forEach(async (poremon) => {
        const response = await fetch(poremon.url);
        const data = await response.json();
        dispatch({
          type: "GET_ALL_POKEMONS",
          payload: data,
        })
      })
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
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

export const handleFavorites = (favorites) => {
  return {
    type: "ADD_POKEMON_TO_FAVORITES",
    payload: favorites,
  };
};
