import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RestaurantGrid from '../components/RestaurantGrid'
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

export default function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }
  function responseFacebook(response){
    console.log(response);
  }
  function addToQueue(serviceID){
    console.log("addToQueue "+serviceID)
  }
  function advanceQueue(serviceID){
    console.log("advanceQueueAction "+serviceID)
  }
  return (
    <div>
      <HeaderBar/>
    <Container maxWidth="lg">
      
      <Grid container className={classes.root} spacing={5}>
          <RestaurantGrid currentQueue="12" estimatedWaitingTime="15" 
          serviceID="s0000000001"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="39" estimatedWaitingTime="35" 
          serviceID="s0000000002"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="15" estimatedWaitingTime="33" 
          serviceID="s0000000003"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="3" estimatedWaitingTime="5" 
          serviceID="s0000000004"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="1" estimatedWaitingTime="3" 
          serviceID="s0000000005"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="99+" estimatedWaitingTime="90" 
          serviceID="s0000000006"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="5" estimatedWaitingTime="45" 
          serviceID="s0000000007"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
          <RestaurantGrid currentQueue="0" estimatedWaitingTime="0" 
          serviceID="s0000000008"
          addToQueueAction={addToQueue}
          advanceQueueAction={advanceQueue}  />
      </Grid>
    </Container>
    </div>
    
  );
}
