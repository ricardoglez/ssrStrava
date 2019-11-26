
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
                zoom: 12
              });
        }
    },
    convertPolylineToLatLng: ( polyline ) => {
        const opts ={ 
            strokeColor:'#fff',
        }
        return google.maps.geometry.encoding.decodePath( polyline , opts )
    },
    getHeatMap:( data, map ) => {
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: data
          });
          heatmap.setMap(map);
          
    }
}

export default gMapsUtils;