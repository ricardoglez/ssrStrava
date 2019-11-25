
const gMapsUtils = {
    initMap: ( selectorId, pos ) => {
        if( pos ){
            console.log(pos);
            return new google.maps.Map(document.getElementById(selectorId), {
                center: {lat: pos.coords.latitude, lng: pos.coords.longitude },
                zoom: 10
              });
        }
        else {
            return new google.maps.Map(document.getElementById(selectorId), {
                center: {lat:19.4537086, lng: -99.1857716},
                zoom: 8
              });
        }
        
    }
}

export default gMapsUtils;