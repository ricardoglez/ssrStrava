const appReducers = ( state, action ) => {
    switch( action.type ){
        case 'handleLoading':
            return {...state, isLoading: action.payload.status }
        case 'updateMounted':
            return {...state, isMounted: action.payload.status }
        case 'updateAtheleteData':
            return { ...state, athleteData: action.payload.athleteData }
        case 'storeToken':
                localStorage.setItem('token', action.payload.token );
                return { ...state, token: action.payload.token }
        case 'handleAuthorized':
                return { ...state, isAuth: action.payload.status }
        case 'redirectTo':
                return { ...state, pathToRedirect: action.payload.pathToRedirect, redirect: action.payload.redirect }
        default: 
            return { ...state }
    }
};

export default appReducers;
