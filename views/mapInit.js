var map;
var marker;
function initMap(){
    const options = {
        center: {
            lat: 20.272610,
            lng: 85.833120
        },
        zoom: 9
    };
    map = new google.maps.Map(document.getElementById('map'),options);
    marker = new google.maps.Marker({position: options.center, map: map});
};