import { pokemosApi } from '../../api/axiosApi'

export const getAllPokemons = () => (dispatch) => {
    pokemosApi.getAllPokemons()
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
        })
}

export const getPokemonById = (id) => (dispatch) => {
    pokemosApi.getSinglePokemon(id)
        .then((responce) => {
            dispatch({
                type: 'GET_SINGLE_POKEMON_BY_ID',
                payload: responce.data.sprites.other['official-artwork'].front_default
            })
        })
}