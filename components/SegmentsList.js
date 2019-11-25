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

const SegmentsList = () => {
    const [isLoading, handleLoaded] = useState(false);
    const [isMounted, handleMounted] = useState(false);
    const [state, dispatch] = useContext(AppContext);

    useEffect( () => {
      if(state.isAuth && state.athleteData && !state.athleteActivities){
        api.getAthleteActivities( )
        .then( response => {
          appActions.updateAthleteActivities( dispatch, response )
          handleMounted(true)
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        })
      }
    } ,[ state.athleteData ] );
    

    if(!isMounted){
        return <CircularProgress></CircularProgress>
    }
    return (

    )
}

export default SegmentsList;