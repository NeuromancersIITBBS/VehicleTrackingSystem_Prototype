
let url = '';
let vehicleData =  async function getVehicleData(){
    return await $.get(url);
};


module.export = vehicleData;