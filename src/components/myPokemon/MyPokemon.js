import React from 'react';
import { connect } from 'react-redux';

// --------------> Material UI dependencies <---------------//
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// -------------->          END            <---------------//

import { MyPokemon } from '../../store/myPokemonReducer';

// ----------> This is where we are storing the pokemon added to the collection? <------------- //


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

// const mapStateToProps = state => ({
//   // what props do we need?
// })

// const mapDispatchToProps = {

// }

export default myPokemon;