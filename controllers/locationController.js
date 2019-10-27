let vehicleData = require('../models/vehicleData.js').vehicleData;

let getLocation = async function getLocation(vehicleId,map) {
    let vehicleList = await vehicleData();
    let longitude = vehicleList[vehicleId].longitude;
    let latitude = vehicleList[vehicleId].latitude;
   // let seats = vehicleList[vehicleId].seats;
    let options = {
        position: {
            lat: latitude,
            lng: longitude,
        },
        map: map.gMap,
    };
    return options;
};
module.export = getLocation;