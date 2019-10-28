let url = '';
var vehicleData; /*= [
    {
        "latitude": "20.272610",
        "longitude": "85.833120",
        "seatsAvailable": "5"
    },
    {
        "latitude": "20.272610",
        "longitude": "85.833120",
        "seatsAvailable": "3"
    },
    {
        "latitude": "20.272610",
        "longitude": "85.833120",
        "seatsAvailable": "2"
    }
];*/
var getVehicleData =  async function getVehicleData(){
    new Promise((resolve,reject)=>{
        setInterval(function () {
            vehicleData = [
                {
                    "latitude": "20.272610",
                    "longitude": "85.833120",
                    "seatsAvailable": "5"
                },
                {
                    "latitude": "123.123.123",
                    "longitude": "123.231.232",
                    "seatsAvailable": "5"
                },
                {
                    "latitude": "123.123.123",
                    "longitude": "123.231.232",
                    "seatsAvailable": "5"
                }
            ];
        },10000);
        resolve(vehicleData) ;
    });
};

//module.export = vehicleData;