//import {getLocation as vehicleLocation} from '../controllers/locationController.js';

function initMap(vehicleId) {
    const options = {
        center: {
            lat: 20.272610,
            lng: 85.833120,
        },
        zoom: 11
    };
    let map = new google.maps.Map(document.getElementById('map'),options);
    let markerOptions = getLocation(vehicleId,map);
    let marker  = new google.maps.Marker(markerOptions);
}

function printSeatsAvailable(vehicleId){
    let seats = getSeatOccupancy(vehicleId);
    $('#seatsAvailable').append(seats);
}
let queryParam = getQueryParams();
printSeatsAvailable(queryParam);
initMap(queryParam);


