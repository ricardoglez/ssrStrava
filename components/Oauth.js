import React ,{useEffect, useState, useContext} from 'react';
import api from '../utils/api';
import appActions from '../actions/appActions';
import {AppContext} from '../context/AppContext';
import { useRouter } from 'next/router';

const Oauth = ({code}) => {
    const [state, dispatch] = useContext(AppContext);
    const [errorAuth, handleError] = useState({ status: false, error: null, message: ''});
    const Router = useRouter();

    useEffect( () => {
        api.getAuthorization(code)
        .then( response => {
            if(response.hasOwnProperty('errors')){
                const errorA = { status: true, error: response.errors}
                handleError(errorA);
            }
            console.log(response);
            appActions.handleAuthorized(dispatch, true);
            appActions.storeToken(dispatch, response.access_token);
            Router.push('/');
        })
        .catch( error => {
            handleError(error);
        })
    },[]);

    if( errorAuth.status ){
        return (
            <React.Fragment>
                Some Errors happened:
                { errorAuth.error.map( e => {
                    return (<code key={e.field}>{e.resource}, { e.field }</code>)
                }) }
            </React.Fragment>
        )
    }

    return ( 
        <React.Fragment>
            <pre>{code}</pre>
            <div> Wait a  minute until we authorize your account..</div>
        </React.Fragment>
    )
}
export default Oauth;