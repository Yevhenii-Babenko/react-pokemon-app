/* import { pokemosApi } from '../../api/axiosApi' */
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=15';

export const getAllPokemons = () => (dispatch) => {
    fetch(baseUrl)
        .then(responce => responce.json())
        .then((pokemons) => {
            pokemons.results.forEach((pokemon) => {
                let url = pokemon.url;
                fetch(url)
                    .then(responce => responce.json())
                    .then((pokeData) => {
                        dispatch({
                            type: 'GET_ALL_POKEMONS',
                            payload: pokeData,
                        })
                    })
                });
        });

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
}

export const getPokemonById = (id) => (dispatch) => {
    /* pokemosApi.getSinglePokemon(id)
        .then((responce) => {
            dispatch({
                type: 'GET_SINGLE_POKEMON_BY_ID',
                payload: responce.data.sprites.other['official-artwork'].front_default
            })
        }) */
}