

var getLocation = function getLocation(vehicleId,map) {
    let vehicleList = vehicleData;
    let longitude = vehicleList[vehicleId].longitude;
    let latitude = vehicleList[vehicleId].latitude;
    let options = {
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
    };
    return options;
};
