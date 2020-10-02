import React from 'react';
import { When } from 'react-if';
import { connect } from 'react-redux';
import { navigate } from '../../store/typeReducer.js';
import { makeStyles } from '@material-ui/core/styles';

// --------------> Material UI dependencies <---------------//
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// -------------->          END            <---------------// 


// -------------->   STYLING START     <---------------//
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    backgroundColor: "#C9E9CB",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
// -------------->   STYLING END    <---------------//

function Pokemon(props){

  const classes = useStyles();

  return (
    <>
    <When condition={!props.activeType}>
      <Container id="cardgrid" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {props.pokemon.map((pokemon, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.pokemon.name}
                </Typography>
              </CardContent>
              {/* <CardActions> */}
                {/* <Button size="small" color="primary">
                    View Details
                </Button>
                <Button size="small" color="primary">
                    Add To Team
                </Button> */}
              {/* </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </When>
  </>
  )
}

const mapStateToProps = state => ({
  activeType: state.types.activeType,
  pokemon: state.pokemon.pokemon,
})

const mapDispatchToProps = {navigate};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);