import React from 'react';
import { Provider } from 'react-redux';
import PokemonContainer from "../components/pokemon/pokemon_index_container";


const Root = ({ store }) => {
return (
  <Provider store={store}>
    <div>Hello, Pokeworld!</div>
    <PokemonContainer />
  </Provider> 
)};

export default Root;