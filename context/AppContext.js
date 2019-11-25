import React, {useState, useReducer, useEffect, useContext, createContext} from 'react';
import appReducers from '../reducers/appReducers';

const initialState = {
    isAuth              : false ,
    isLoading           : false ,
    athleteData         : null,
    athleteStats        : null,
    athleteRoutes       : null,
    athleteActivities   : null,
    isMounted           : false,
    redirect            : { status: false , path: ''},
    token               : null,
    error               : { isError: false , errorMessage: null },
}

const AppContext = createContext( initialState );

const AppContextProvider = ({ children }) => {
    const value = useReducer( appReducers, initialState );
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

const AppConsumer = AppContext.Consumer;
export { AppContext, AppContextProvider, AppConsumer};