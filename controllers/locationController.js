//import {vehicleData} from '../models/vehicleData.js';

var getLocation = function getLocation(vehicleId,map) {
    let vehicleList = vehicleData;
    console.log(vehicleList);
    console.log(typeof vehicleId);
    console.log(vehicleList[vehicleId]);
    console.log(vehicleList[vehicleId].longitude);
    let longitude = vehicleList[vehicleId].longitude;
    console.log(longitude);
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
//module.export = getLocation;