import React from 'react';
// import { connect } from 'react-redux';

// --------------> Material UI dependencies <---------------//
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// -------------->          END            <---------------//

// import { MyPokemon } from '../../store/myPokemonReducer';


function myPokemon(props){
  return(
    <Card>
      <CardContent>
        <Typography>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  )
}

export default myPokemon;