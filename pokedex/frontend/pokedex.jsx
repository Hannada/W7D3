import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemons } from './util/api_util';
// import store from "./store/store";
import { selectAllPokemon } from "./reducers/selectors";
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemons = fetchAllPokemons;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

});


  // Testing
  // const rootEl = document.getElementById('root');
  