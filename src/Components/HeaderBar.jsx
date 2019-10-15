import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#058ED9'

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    headerBar: {
        backgroundColor: '#058ED9',
        boxShadow: 'none',
    },
}));

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.headerBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AssessmentSharpIcon
                        />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        ATM monitoring system
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}