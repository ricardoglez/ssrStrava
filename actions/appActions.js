
const appActions = {
    handleLoading: ( dispatch, status ) => {
        dispatch({ type : 'handleLoading', payload:{  status } });
    },
    handleAuthorized: ( dispatch, status ) => {
        dispatch({ type: 'handleAuthorized', payload:{ status } })
    },
    updateAthleteData : ( dispatch, athleteData ) => {
        dispatch({ type: 'updateAthleteData',  payload:{ athleteData } })
    },
    updateAthleteStats : ( dispatch, athleteStats ) => {
        dispatch({ type: 'updateAthleteStats',  payload:{ athleteStats } })
    },
    updateAthleteRoutes: ( dispatch , athleteRoutes) => {
        dispatch({ type: 'updateAthleteRoutes',  payload:{ athleteRoutes } })
    },
    updateAthleteActivities: ( dispatch , athleteActivities) => {
        dispatch({ type: 'updateAthleteActivities',  payload:{ athleteActivities } })
    },
    handleMounted: (dispatch, status ) => {
        dispatch({type: 'handleMounted',payload:{ status } });
    },
    storeToken: ( dispatch, token )=> {
        dispatch({type:'storeToken',payload:{ token } });
    },
    handleRedirect: ( dispatch, redirect ) => {
        dispatch( {type: 'redirect',payload:{ redirect } })
    },
    handleError: ( dispatch, error ) => {
        dispatch( {type: 'error',payload:{ error } })
    }
}

export default appActions;