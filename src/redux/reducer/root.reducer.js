const initialState = {
  pokemons: [],
  favorPokemons: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS": {
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    }
    case "ADD_POKEMON_TO_FAVORITES": {
      return {
        ...state,
        // favorPokemons: [...state.favorPokemons, action.payload]
        favorPokemons: action.payload,
      };
    }
    default:
      return state;
  }
};
