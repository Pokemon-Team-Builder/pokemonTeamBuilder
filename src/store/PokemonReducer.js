/* eslint-disable no-case-declarations */
import axios from 'axios';

let initialState = {
  pokemon: [
    
  ],

  activeType: '',
  activePokemon: '',
}

export default (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {

    // case 'GET_POKEMON':
    //   return {...state, pokemon: payload};
    
    case 'NAVIGATE':
      return {...state, activeType:payload};

      return state;

  }

}

export function getPokemon(){}
//   

//   return async function (dispatch){
//     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
//     dispatch({
//       type: 'GET_POKEMON',
//       payload: response.data.results
//       // Payload here should be returning an array of ~20 Pokemon Objects with keys of 'name' and 'url'
//     })
//   }

// 