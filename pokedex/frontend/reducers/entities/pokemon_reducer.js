import { RECEIVE_ALL_POKEMON } from "../../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON: {
      let newPokemon = {};
      state.forEach(pokemon => {newPokemon[pokemon.id] = pokemon});
      return newPokemon;
    }
      
    default: 
      return state;
  }
}

export default pokemonReducer;