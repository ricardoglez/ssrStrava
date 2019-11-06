import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';

import {baseStyles} from '../themes/customStyles';
import Header from './Header';
import {AppContext} from '../context/AppContext';
import utilities from '../utils/utilities';
import api from '../utils/api';
import appActions from '../actions/appActions';
import useAuthFromStrava from '../hooks/useAuthFromStrava';
import Oauth from '../components/Oauth';

const MyLayout = ({children}) => {
    const classes = baseStyles();
    const [state, dispatch ] = useContext(AppContext);
    const router = useRouter();
    const [isOauth, oauthCode] = useAuthFromStrava();

    if(state.redirect.status == true && state.redirect.path ){
        router.push(state.redirect.path);
    }

    useEffect( () => {
        if(utilities.getLocalToken()){
            appActions.handleAuthorized(dispatch, true);
            api.getAthleteData()
            .then( response => {
                appActions.updateAthleteData(dispatch , response);
            })
        }
        else {
            appActions.handleAuthorized(dispatch, false);
        }
    }, [] );


    return (
        <div >
            <Header/>
            <Grid container align='center' justify='center'>
                <Grid className={classes.mainContainer} item xs={8}>
                {
                  isOauth && !state.isAuth 
                  ?
                   <Oauth code={oauthCode} />
                  :                 
                   children
                }
                </Grid>
            </Grid>
        </div>
    )
}

export default MyLayout;