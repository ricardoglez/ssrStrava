import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import MyLayout from '../components/MyLayout';
import {baseStyles} from '../themes/customStyles';

const SignInStrava = () => {
    const classes = baseStyles(); 
    const loginUrl = `https://www.strava.com/oauth/authorize?client_id=40487&scope=read_all,activity:read_all&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force`
    return (
        <Grid container direction='column' justify='center'>
            <Typography className={classes.textCenter}> Identifícate </Typography>
            <Button variant='contained' color='secondary'>
                <a className={classes.linkWithoutStyle} href={loginUrl}>
                Entra con tu cuenta de Strava
                </a>
            </Button>
        </Grid>
    )
};

export default SignInStrava;