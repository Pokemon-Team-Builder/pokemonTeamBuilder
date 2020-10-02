import React from 'react';

// --------------> Material UI dependencies <---------------//

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles'

// -------------->          END            <---------------//

// -------------->   STYLING START     <---------------//

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'linear-gradient(55deg, #FE6B8B 30%, #FF8E53 10%)',
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

// -------------->   STYLING END    <---------------//


export default function Header (props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
           <Toolbar className={classes.toolbar}>
             <Typography variant="h3" color="inherit" noWrap className={classes.toolbarTitle}>
               Pokemon, Pokemon, We Love Pokemon
             </Typography>
           </Toolbar>
         </AppBar>
       </div>
  )
};

