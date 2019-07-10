/* eslint-disable no-undef */


export const getCurrentAddress = () => {
    return getCurrentLocation()
        .then(position=>{
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                var google_map_position = new google.maps.LatLng( lat, lng );
    
                return getGoolgeAddress(google_map_position)
        });
}

const getCurrentLocation = () =>{
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
}

const getGoolgeAddress = (google_map_position) =>{
    var google_maps_geocoder = new google.maps.Geocoder();
    return new Promise (function (resolve,reject){
        google_maps_geocoder.geocode({ 'latLng': google_map_position },resolve,reject)
    })
}