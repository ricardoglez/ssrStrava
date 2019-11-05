import React, {useContext, useState, useEffect} from 'react';
import Link from 'next/link';

import {AppContext} from '../context/AppContext';
const linkStyle = {
    margibnRight:15,
}

const Header = ( ) => {
    const [state,dispatch] = useContext(AppContext);
    return (
        <div>
            <Link href='/'>
                <a style={linkStyle}> Home</a>
            </Link>
            <Link href='/about'>
                <a style={linkStyle}> About</a>
            </Link>
            {
                state.isAuth
                ?
                <Link href='/signout'>
                    <a style={linkStyle}> Sign out</a>
                </Link>
                :
                <Link href='/signin'>
                    <a style={linkStyle}> Sign in</a>
                </Link>
            }
        </div>
    )
}

export default Header;