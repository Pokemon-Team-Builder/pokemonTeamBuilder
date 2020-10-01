/* eslint-disable no-case-declarations */

let initialState = {
  team: [
    {name: 'name'},
  ],
  totalPokemon: 0,
}

export default ( state = initialState, action ) => {

  let { type, payload } = action;
  let totalPokemon = 0;
  let team = [];
  
  switch(type) {
    case 'ADD':
      totalPokemon = state.totalPokemon + 1;
      team = state.team.map(pokemon => {
        if (pokemon.name === payload) {
          return { name: 'pokemon data object' }
        }
        return team;
      })
      return { totalPokemon, team };

    case 'REMOVE':
      totalPokemon = state.totalPokemon - 1;
      team = state.team.map(pokemon => {
        if (pokemon.name === payload) {
          return { name: 'pokemon data object' }
        }
        return team;
      })
      return { totalPokemon, team };
      
    case 'RESET':
      return initialState;

    default:
      return state;
  }

}

export const add = (name) => {
  return {
    type: 'ADD',
    payload: name,
  }
}

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload: name,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}