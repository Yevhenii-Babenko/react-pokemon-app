import {
    SET_NEW_PATH,
    LOAD_ALL_POKEMONS,
    LOAD_POKEMON_TO_FAVORITES,
    LOAD_SINGLE_POKEMON
 } from '../actions/action.type';

const initialState = {
    pokemons: [],
    favorite: [],
    singlePokemon: [],
    pathName: '/pokemon-app/',
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POKEMONS': {
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            };
        }
        case 'ADD_POKEMON_TO_FAVORITES': {
            return {
                ...state,
                favorite: [...state.favorite, action.payload]
            };
        }
        case 'GET_SINGLE_POKEMON_BY_ID': {
            return {
                ...state,
                singlePokemon: [...state.singlePokemon, action.payload]
            };
        }
        case SET_NEW_PATH : {
            return {
                
            }
        }
        default:
            return state;
    }
}