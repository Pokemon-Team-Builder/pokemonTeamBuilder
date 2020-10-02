import React from 'react'

// --------------> Material UI dependencies <---------------//

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// -------------->          END            <---------------//


// -------------->   STYLING START     <---------------//

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: 'linear-gradient(55deg, #FF8E53 30%, #FE6B8B 10%)',
  },
}));

// -------------->   STYLING END     <---------------//

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <Typography variant="h6" align="center" color="inherit" gutterBottom>
    &copy; Redux Group 1 - 1(800)POKEMON
    </Typography>
    </footer>
  )}  