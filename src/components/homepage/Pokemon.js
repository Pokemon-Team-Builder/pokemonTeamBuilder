import React from 'react';
// import { connect } from 'react-redux';



// --------------> Material UI dependencies <---------------//
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// @material-ui/button
//@material-ui/icon-button?
{/* <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton> */}
// -------------->          END            <---------------// 


// import { getPokemon } from '../../store/PokemonReducer';





function Pokemon(){
  return (
    <Card>
    <CardContent>
      <Typography>
        Pokemon
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
  )
}

// const mapDispatchToProps = {//Add to Cart Here?}
// const mapStateToProps = state => ({
  
// })

export default Pokemon;