/* eslint-disable no-case-declarations */
import axios from 'axios';

let initialState = {
  types: [

  ],
  activeType: '',
}

export default ( state = initialState, action ) => {

  let { type, payload } = action;

  switch(type) {
    case 'NAVIGATE':
      return { ...state, activeType: payload }
    
    case 'LOAD':
      return {...state, types: payload}
      
    
    default:
      return state

  }

}

export const navigate = (name) => {
  return {
    type: 'NAVIGATE',
    payload: name,
  }

}

export const getTypes = () => {
  return async function(dispatch) {
    console.log('before axios')
    let response = await axios.get('https://pokeapi.co/api/v2/type/')
    console.log('What are we getting back?', response);
    dispatch({
      type: 'LOAD', 
      payload: response.data.results,
      // returns an array of 20 type objects with properties name and url
    })

  }
}