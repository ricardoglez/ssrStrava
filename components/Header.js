import React, {useContext, useState, useEffect} from 'react';
import Link from 'next/link';
import AthleteData from './AthleteData';

import { 
    Drawer,
    Button,
    AppBar,
    Grid,
    Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {AppContext} from '../context/AppContext';
import {baseStyles} from '../themes/customStyles';


const Header = ( ) => {
    const [state,dispatch] = useContext(AppContext);
    const classes = baseStyles();

    return (
        <AppBar position='static' className={classes.appBar}>
            <Grid item xs={state.isAuth ? 6 : 12}>
                <Button> 
                    <Link href='/'>
                        <a className={classes.linkWithoutStyle}> Home</a>
                    </Link>
                </Button>
                <Button>
                    <Link href='/about'>
                        <a className={classes.linkWithoutStyle}> About</a>
                    </Link>
                </Button>
                <Button>
                    {
                        state.isAuth
                        ?
                        
                        <Link href='/signout'>
                            <a className={classes.linkWithoutStyle}> Sign out</a>
                        </Link>
                        :
                        <Link href='/signin'>
                            <a className={classes.linkWithoutStyle}> Sign in</a>
                        </Link>
                    }
                </Button>
            </Grid>
            <AthleteData />
        </AppBar>
    )
}

export default Header;