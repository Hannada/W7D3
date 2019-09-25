import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemons } from './util/api_util';
import store from "./store/store"


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemons = fetchAllPokemons;


  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

