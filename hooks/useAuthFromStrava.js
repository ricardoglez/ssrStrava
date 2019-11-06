import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

const useAuthFromStrava = ( ) => {
    let [ isOauth, handleOauth  ] = useState(false); 
    let [ oauthCode, handleCode ] = useState(null); 
    let router = useRouter();
    useEffect( () => {
        console.log(router.query);
        if( router.query.hasOwnProperty('code') ){
            handleOauth(true);
            handleCode(router.query.code);
        }
    },[Object.keys(router.query).length])
    
    return [ isOauth, oauthCode ]
}

export default useAuthFromStrava;