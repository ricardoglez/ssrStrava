import React , { useEffect, useState, useContext} from 'react';
import { 
    Typography, 
    Grid,
    Avatar,
    Box
 } from '@material-ui/core';
import {AppContext} from '../context/AppContext';
import {baseStyles} from '../themes/customStyles';

const AthleteData = ({}) => {
    const classes = baseStyles();
    const [state, dispatch] = useContext(AppContext);
    
    if( !state.isAuth || !state.athleteData ){
        return null
    }
    return (
        <Grid item >
            <Grid container justify="center" alignItems="center">
                <Typography variation='caption'>
                Hola { state.athleteData.firstname}
                </Typography>
                <Avatar 
                   className={classes.avatar}
                >
                    {state.athleteData.firstname[0]}
                </Avatar>
            </Grid>
        </Grid>
    )
}

export default AthleteData;