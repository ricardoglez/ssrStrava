import React , { useState, useContext, useEffect} from 'react';
import {
    List, 
    ListItem,
    ListItemIcon,
    CircularProgress,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton
} from '@material-ui/core';
import {AppContext} from '../context/AppContext';
import GMapWrapper from './GMapWrapper';
import api from '../utils/api';
import appActions from '../actions/appActions';
import gMapsUtils from '../utils/gMapsUtils';

const ListRenderer = ({activities}) => {
    return activities.map(( activity ) => {
        return (
        <ListItem key={activity.uploadId} role={undefined} button onClick={ () => { console.log('Clicked', activity) } }>
            <ListItemText id={activity.uploadId} primary={activity.name}/>
        </ListItem>
    )} );
};

const ActivitiesList = () => {
    const [isLoading, handleLoaded] = useState(false);
    const [isMounted, handleMounted] = useState(false);
    const [state, dispatch] = useContext(AppContext);

    useEffect( () => {
      if(state.isAuth && state.athleteData && !state.athleteActivities){
        api.getAthleteActivities( )
        .then( response => {
          appActions.updateAthleteActivities( dispatch, response )
          console.log(response);
          handleMounted(true)
        })
        .catch(error => {
          console.error(error);
        })
      }
    } ,[ state.athleteData ] );
    

    if(!isMounted || isLoading){
        return <CircularProgress></CircularProgress>
    }
    else {
        return (
            <React.Fragment>
               <GMapWrapper/>
                <List>
                    <ListRenderer activities={state.athleteActivities}/>
                </List>
            </React.Fragment>
        )
    }
}

export default ActivitiesList;