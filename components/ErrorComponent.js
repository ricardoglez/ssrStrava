import React ,{useState, useEffect, useContext} from 'react';
import{
    Grid,
    Typography,
} from '@material-ui/core';
import {AppContext} from '../context/AppContext';
import {baseStyles} from '../themes/customStyles';

const ErrorComponent = () => {
    const [state, dispatch] = useContext(AppContext);
    const classes = baseStyles();

    return( 
        <Grid container justify='center' className={classes.error} direction='column'>
            <Typography variant='h3' className={classes.error}>Error:</Typography>
            <Typography className={classes.error}>{state.error.errorMessage}</Typography>
        </Grid>
    )
}
export default ErrorComponent;