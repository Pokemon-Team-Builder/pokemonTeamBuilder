import React, {useEffect} from 'react';

// --------------> Material UI dependencies <---------------//
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui-core/Typography';
// import Container from '@material-ui/core/Container';
// import typeReducer from '../../store/typeReducer';
// -------------->          END            <---------------//


import { connect } from 'react-redux';


//------------->     REDUCERS IMPORT <-------------//
import { navigate, getTypes } from '../../store/typeReducer.js';
//------------->          END        <-------------//



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
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
}));
// -----------------> STYLING END <------------------//



// -------> TODO This is where we are going to store the types of pokemon <-------- //
// -------> Will be rendering? <-------- /

function Types(props){

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  useEffect(() => {
    props.getTypes();
  }, [props])

  return(

    <Paper classname={classes.root}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
      >
      {props.types.map((type) => 
        <Tab key={type.name} label={type.name} onClick={() => props.navigate(type.name)}/>
      )}
      {/* <Tab key="Sample" label="Sample" /> */}
      </Tabs>

    </Paper>

  )
}

const mapStateToProps = state => {
  return {
    types: state.types.types
  }
}

const mapDispatchToProps = {
  navigate, getTypes
}

export default connect(mapStateToProps, mapDispatchToProps)(Types);


