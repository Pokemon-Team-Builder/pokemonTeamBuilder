import axios from 'axios';


// --------->     STATE     <------------//

let initialState = {
  types: [],

  activeType: [],
}
// --------->  STATE END  <------------//

export default ( state = initialState, action ) => {

  let { type, payload } = action;
 
  switch(type) {
    case 'NAVIGATE':
      return {...state, activeType:payload.name}
    
    case 'LOAD':
      return {...state, types:payload} 
      
    default:
      return state

  }

}


export const navigate = (type) => {
  let url = type.url;
  return async function(dispatch) {
    let response = await axios.get(url)
    dispatch({
      type: 'NAVIGATE',
      payload: response.data.pokemon,
    })
  }
}

export const getTypes = () => {
  return async function(dispatch) {
    let response = await axios.get('https://pokeapi.co/api/v2/type/')
    dispatch({
      type: 'LOAD', 
      payload: response.data.results,
     
    })

  }
}