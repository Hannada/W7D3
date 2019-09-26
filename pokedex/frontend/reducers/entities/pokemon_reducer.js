import { RECEIVE_ALL_POKEMON } from "../../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON: {
      let newPokemon = {};
      Object.keys(action.pokemon).forEach( id => {newPokemon[id] = action.pokemon[id]});
      return newPokemon;
    }
    default: 
      return state;
  }
}

export default pokemonReducer;