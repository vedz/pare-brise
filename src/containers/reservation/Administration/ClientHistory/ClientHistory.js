import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Slide from "@material-ui/core/Slide";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Divider from '@material-ui/core/Divider';
import Data from  './../../../../Data/Clients.json';
import Search from './../../../../components/Search/Search';

const transitionDuration = 500;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: "14px"
  },
}));

export default function ClientHistory() {
  const classes = useStyles();
  const [elementIn, setElementIn] = React.useState(true);

  return (
    <div className={classes.root}>
        <Slide
          in={elementIn}
          timeout={transitionDuration}
          direction="right"
        >
        <Grid item  >
          <Search></Search>
          <Typography variant="h6" className={classes.title}>
            Clients  
          </Typography>
          
          <div className={classes.demo}>
            <List >
                {  Data.map( elt=> {
                    return (
                    <div key= {elt.id} >
                    <ListItem  onClick={(event) => { 
                        
                        setElementIn(true);
                        setTimeout(() => {
                        setElementIn(false);
                        }, transitionDuration); }}  >
                    <ListItemAvatar >
                        <Avatar>
                        <FaceIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary= {elt.nom + " " +  elt.prenom}
                        secondary={ "Impact " +   elt.zoneVoiture}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                        <ArrowRightIcon />
                        </IconButton>
                    </ListItemSecondaryAction>  
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </div>
                    )})
                }
            </List>
          </div>
        </Grid>
        </Slide>
    </div>
  );
}