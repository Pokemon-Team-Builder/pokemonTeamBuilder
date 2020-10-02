

// --------->     STATE     <------------//

let initialState = {
  pokemon: [
    
  ],

  activePokemon: '',
}
// --------->    STATE END    <------------//

export default (state = initialState, action) => {

  const {type, payload} = action;
  switch(type) {
       
    case 'NAVIGATE':
      return {...state, pokemon:payload};

    default:
      return state;

  }

}
