import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AdvanceQueueGrid from '../components/AdvanceQueueGrid'
import HeaderBar from '../components/HeaderBar'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:100,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function AdvancePage({ url: { query: { sid } } })  {
  const classes = useStyles();

  function confirmAdvanceQueue(serviceID){
    console.log("advanceQueueAction "+serviceID)
  }
  return (
    <Container maxWidth="lg">
      
      <Grid container className={classes.root} spacing={5}>
          <AdvanceQueueGrid currentQueue="12" estimatedWaitingTime="15" 
          serviceID={sid}
          addToQueueAction={confirmAdvanceQueue}
          advanceQueueAction={confirmAdvanceQueue}  />
      </Grid>
    </Container>
    
  );
}
