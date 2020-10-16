
import { Typography, AppBar, IconButton, Drawer, List, ListItem, Divider, FormControlLabel, Switch, withStyles, Toolbar, Box, Button, Link } from "@material-ui/core";
import * as React from "react";
import { makeStyles } from '@material-ui/styles';
import { purple } from "@material-ui/core/colors";
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router";
import BallotIcon from '@material-ui/icons/Ballot';
import GroupIcon from '@material-ui/icons/Group';


const PurpleSwitch = withStyles({
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500]
        },
        '&$checked + $track': {
            backgroundColor: purple[500]
        }
    },
    checked: {},
    track: {}
})(Switch);

const useStyles = makeStyles (() => ({
    appBar: {
        color: 'white',
        '&.MuiAppBar-colorPrimary': {
            backgroundColor: '#662483'
        },
        backgroundColor: '#662483'
    },
    title: {
        flexGrow: 1,
        minWidth: '150px'
    },
    menuButton: {
        marginRight: 16
    }
}));

const Header= (props ) => {

    const classes = useStyles();
    const [drawerOpened, setDrawerOpened] = React.useState(false);
  
    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
                <Box component="div" display="flex" flexGrow={1}>
                    <IconButton edge="start" className={classes.menuButton} onClick={(e) => setDrawerOpened(true)} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography color="inherit" className={classes.title}>
                        <Link href="#" underline="none" color="inherit" onClick={(e) => {e.preventDefault();props.history.push('/')}}></Link>
                    </Typography>
                </Box>
            </Toolbar>

            <Drawer open={drawerOpened} onClose={(e) => setDrawerOpened(false)}>
                <List disablePadding={true}>
                    <ListItem className={classes.appBar}>
                        <Typography variant="h4" color="inherit">
                            NovoGlass
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Typography variant="h5">
                            Titre
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <FormControlLabel label="Constat" onClick={() => props.history.push("/Reservation")} control={
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                             <BallotIcon  fontSize="large"/>
                         </IconButton>                           
                        } />
                    </ListItem>
                    <ListItem>
                        <FormControlLabel label="Clients" onClick={() => props.history.push("/ClientHistory")} control={
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                             <GroupIcon  fontSize="large"/>
                        </IconButton>                           
                        } />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
}
export default withRouter(Header); 