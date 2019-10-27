const vehicleLocation = require('../controllers/locationController').getLocation;


async function initMap(vehicleId) {
    const options = {
        center: {
            lat: 20.272610,
            lng: 85.833120,
        },
        zoom: 11
    };
    let map = new google.maps.Map(document.getElementById('map'),options);
    map.init(function () {
        setInterval(function () {
            let markerOptions = vehicleLocation(vehicleId,map);
            let marker  = new google.maps.Marker(markerOptions)
        },10000)
    });


}
initMap(1);
