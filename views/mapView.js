//import {getLocation as vehicleLocation} from '../controllers/locationController.js';

var initMap = function initMap(vehicleId) {
    const options = {
        center: {
            lat: 20.272610,
            lng: 85.833120,
        },
        zoom: 11
    };
    let map = new google.maps.Map(document.getElementById('map'),options);
    console.log("get Location is called");
    let markerOptions = getLocation(vehicleId,map);
    let marker  = new google.maps.Marker(markerOptions);
};

var printSeatsAvailable = function printSeatsAvailable(vehicleId){
    let seats = getSeatOccupancy(vehicleId);
    $('#seatsAvailable').text("seats left : "+seats);
};


