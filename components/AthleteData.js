import React , { useEffect, useState, useContext} from 'react';
import { 
    Typography, 
    Grid,
    Avatar,
    Box
 } from '@material-ui/core';
 import numeral from 'numeral';
import {AppContext} from '../context/AppContext';
import {baseStyles} from '../themes/customStyles';
import api from '../utils/api';
import appActions from '../actions/appActions';

const AthleteData = ({}) => {
    const classes = baseStyles();
    const [state, dispatch] = useContext(AppContext);
    if( !state.isAuth || !state.athleteData || !state.athleteStats){
        return null
    }
    return (
        <Grid item xs={6}>
            <Grid container justify="center"  alignItems="center">
                <Typography variation='caption'>
                Hola { state.athleteData.firstname}
                </Typography>
                <Avatar 
                   className={classes.avatar}
                >
                    {state.athleteData.firstname[0]}
                </Avatar>
                <Grid item>
                    <Grid container direction='column' justify='start'>
                        <Box>
                            <Typography variant='caption'>T. Kms: {numeral(state.athleteStats.all_ride_totals.distance/1000).format('0,000')}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='caption'>T Hrs: {state.athleteStats.all_ride_totals.moving_time/3600}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AthleteData;