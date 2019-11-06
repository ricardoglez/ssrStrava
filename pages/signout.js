import { useRouter } from 'next/router';
import React, {useContext, useEffect} from 'react';
import MyLayout from '../components/MyLayout';
import { 
    CircularProgress, 
    Grid, 
    Typography 
} from '@material-ui/core';

import {AppContext} from '../context/AppContext';
import utilities from '../utils/utilities';
import {baseStyles} from '../themes/customStyles';
import appActions from '../actions/appActions';

const SignOut = () => {
    const [state, dispatch] = useContext(AppContext);
    const classes = baseStyles();
    const router = useRouter();
    useEffect( () => {
       setTimeout( () => {
         utilities.removeLocalToken();
         appActions.updateAthleteData(dispatch, null);
         appActions.handleAuthorized(dispatch, false);
         router.push('/');
        }, 800 ); 
    },[])
    return (
        <MyLayout>
            <Grid container direction='column' justify='center'>
                <Grid item>
                    <Typography className={ classes.textCenter }>Regresa pronto { !state.athleteData ? null : state.athleteData.firstname }</Typography>
                </Grid>
                <Grid item xs={12} className={ classes.textCenter }>
                    <CircularProgress color='secondary' />
                </Grid>
            </Grid>
        </MyLayout>
    )
}
export default SignOut;