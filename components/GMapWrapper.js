import React ,{ useEffect , useState, useContext, useRef } from  'react';
import { Grid, CircularProgress} from '@material-ui/core';

import {baseStyles} from '../themes/customStyles';
import gMapsUtils from '../utils/gMapsUtils';

const GMapWrapper = ({ activitiesList }) => {
    const [position, setPosition] = useState( null );
    const [mapIsReady, setMapReady] = useState(false);
    const classes = baseStyles();    
    const map = useRef(null);

    useEffect( () => {
        navigator.geolocation.watchPosition( (pos) =>  {
            setPosition(pos);
          });
    }, [])

    useEffect(() => {
        console.log('Map tag is ready');
        let mapObject = gMapsUtils.initMap('map', position);
        console.log(mapObject); 
    },[map, position])

    return (
        <Grid container direction='row' justify='center' align='center' xs={ 8 }>
           
                <div className={classes.map} ref={map} id="map"/>
        </Grid>
    )
}

export default GMapWrapper;