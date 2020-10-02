import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// -----------> Reducers here <----------- //

import types from './typeReducer.js'
import myPokemon from './myPokemonReducer.js';
import pokemon from './PokemonReducer.js';

let reducers = combineReducers({ 
  types,
  myPokemon, 
  pokemon
});

// -----------> End of Reducers <------------ //

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();