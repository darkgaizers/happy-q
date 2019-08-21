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
import { red,cyan } from '@material-ui/core/colors';
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
    buy:{
        backgroundColor: cyan[500],
        borderColor:cyan[300],
        
    }
}));

export default function AdvanceQueue(props) {
    const { serviceID, currentQueue, estimatedWaitingTime, addToQueueAction, advanceQueueAction } = props
    const classes = useStyles();
    /*     const [expanded, setExpanded] = React.useState(false);
    
        function handleExpandClick() {
            setExpanded(!expanded);
        } */

    return (
        <Card className={classes.card}>
            <CardHeader
                title="Advance Service"
            />
            <CardMedia
                className={classes.media}
                image="https://edge.alluremedia.com.au/m/l/2016/07/iStock_77993281_LARGE.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Grid container spacing={3} alignItems="center">
                    <Grid item sm={6} >
                        <Typography h6 gutterBottom >Restaurant Burger A</Typography>
                    </Grid>

                    <Grid item sm={12}>
                        <Typography subtitle1 gutterBottom >Do you want to use advance queue?</Typography>

                    </Grid>


                </Grid>

            </CardContent>
            <CardActions disableSpacing>
                <Button variant="outlined" onClick={() => {
                    advanceQueueAction(serviceID)
                }}
                className={classes.buy}
                >THB 59</Button>
                &nbsp;
                <Button variant="contained" onClick={() => {
                    advanceQueueAction(serviceID)
                }}>Back to Normal Queue</Button>
            </CardActions>

        </Card>
    );
}

function QueueDisplayText(props) {
    return (
        <Typography variant="h2" gutterBottom style={{ color: calcQueueIntensity(props.currentQueue) }}>{props.currentQueue}</Typography>
    )
}
function QueueEstimatedText(props) {
    return (
        <Typography variant="subtitle1" gutterBottom color={calcEstimatedText(props.estimatedWaitingTime)}>Estimated Waiting Time : {props.estimatedWaitingTime} Min(s)</Typography>
    )
}

function calcQueueIntensity(qStr) {

    var q = qStr * 1
    console.log(q)
    if (qStr === "99+")
        return "error"
    if (q < 5)
        return "#339933"
    if (q < 15)
        return "textSecondary"
    if (q > 15)
        return "error"
    /*     switch(q){
            case q*1 <5 : return "textPrimary";
            case q*1 <15 : return "textSecondary";
            case q*1 >15 : return "error";
            default : return "inherit";
        } */
}
function calcEstimatedText(t) {

    var t = t * 1
    console.log(t)
    if (t < 5)
        return "#33FF33"
    if (t < 30)
        return "textSecondary"
    if (t > 15)
        return "error"
}