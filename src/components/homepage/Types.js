import React, {useEffect} from 'react';
import { connect } from 'react-redux';

// --------------> Material UI dependencies <---------------//

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

// -------------->          END            <---------------//



// -------------->     REDUCERS IMPORT      <-------------//

import { navigate, getTypes } from '../../store/typeReducer.js';

// -------------->          END            <-------------//



// -------------->      STYLING START      <---------------//

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // overflowX: 'auto',
  },
  tab: {
    marginLeft: theme.spacing(-11),
    flexWrap: "wrap",
    fontSize: 10,
    
  },
}));

// -----------------> STYLING END <------------------//

function Types(props){

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };


  useEffect(() => {
    props.getTypes();
  }, )

  const onClickHandler = (type) => {
    props.navigate(type);
  }


  return(
    <Paper  id="paper" className={classes.root}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          orientation="horizontal"
      >
      {props.types.map((type) => 
        <Tab className={classes.tab} key={type.name} label={type.name} onClick={() => onClickHandler(type)}/>)}
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


