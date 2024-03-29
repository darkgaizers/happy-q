import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
import QueueIcon from '@material-ui/icons/GroupAdd';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));  

export default function RestaurantGrid(props) {
    const {serviceID,currentQueue,estimatedWaitingTime,addToQueueAction,advanceQueueAction} = props
    const classes = useStyles();
/*     const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    } */

    return (
        <Card className={classes.card}>
            <CardHeader
                action={
                    <IconButton aria-label="star">
                        <StarIcon />5.0
                </IconButton>
                }
                title="Restaurant Burger A"
            />
            <CardMedia
                className={classes.media}
                image="https://edge.alluremedia.com.au/m/l/2016/07/iStock_77993281_LARGE.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Grid container spacing={3} alignItems="center">
                    <Grid item sm={6} >
                    <QueueDisplayText currentQueue={currentQueue}/>
                    </Grid>
                    <Grid item sm={6} >
                    <Button variant="outlined" onClick={()=>{
                        addToQueueAction(serviceID)
                    }}>Queue Now</Button>
                    </Grid>
                    <Grid item sm={12}>
                        <QueueEstimatedText estimatedWaitingTime={estimatedWaitingTime}/>
                        
                    </Grid>
                    <Grid item sm={6}>
                    
                    </Grid>

                </Grid>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton>

                </IconButton>
                <Button variant="outlined" onClick={()=>{
                        advanceQueueAction(serviceID)
                    }}>Queue Advance</Button>
{/*                 <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
            </CardActions>
{/*             <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
          </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
          </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            </Collapse> */}
        </Card>
    );
}

function QueueDisplayText(props){
    return (
        <Typography variant="h2" gutterBottom style={{color:calcQueueIntensity(props.currentQueue)}}>{props.currentQueue}</Typography>
    )
}
function QueueEstimatedText(props){
    return (
        <Typography variant="subtitle1" gutterBottom color={calcEstimatedText(props.estimatedWaitingTime)}>Estimated Waiting Time : {props.estimatedWaitingTime} Min(s)</Typography>
    )
}

function calcQueueIntensity(qStr){
    
    var q = qStr*1
    console.log(q)
    if (qStr === "99+")
        return "error"
    if(q< 5)
        return "#339933"
    if(q < 15)
        return "textSecondary"
    if(q > 15)
        return "error"
/*     switch(q){
        case q*1 <5 : return "textPrimary";
        case q*1 <15 : return "textSecondary";
        case q*1 >15 : return "error";
        default : return "inherit";
    } */
}
function calcEstimatedText(t){
    
    var t = t*1
    console.log(t)
    if(t< 5)
        return "#33FF33"
    if(t < 30)
        return "textSecondary"
    if(t > 15)
        return "error"
}