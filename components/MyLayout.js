import {useRouter} from 'next/router';
import {useContext, useEffect, useState} from 'react';
import Header from './Header';
import {AppContext} from '../context/AppContext';
import appActions from '../actions/appActions';


const MyLayout = ({children}) => {
    const [state, dispatch ] = useContext(AppContext);
    const router = useRouter();
    if(state.redirect.status == true && state.redirect.path ){
        router.push(state.redirect.path);
    }
    return (
        <div className='appContainer'>
            <Header />
            { children}
        </div>
    )
}

export default MyLayout;