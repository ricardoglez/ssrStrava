import React ,{ useEffect, useContext, useState} from 'react';
import {
    Grid,
    Tabs,
    Tab,
    Box,
    AppBar,
    Typography,
} from '@material-ui/core';

import { AppContext } from '../context/AppContext';
import api from '../utils/api';
import appActions from '../actions/appActions';
import ActivitiesList from './ActivitiesList';

const Home = () => {
  const [state, dispatch] = useContext(AppContext);


  if( state.isAuth){
    return (
      <React.Fragment>
        <ActivitiesList/>
      </React.Fragment>
    )
  } else {
    return (
      <div>
        Please LogIn 
      </div>
    )
  }

}
export default Home;