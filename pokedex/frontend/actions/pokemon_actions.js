import * as APIutil from "../util/api_util";


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => {
  return (dispatch) => {
    return APIutil.fetchAllPokemons().then(pokemon => {
      return dispatch(receiveAllPokemon(pokemon))
    })
  };
};