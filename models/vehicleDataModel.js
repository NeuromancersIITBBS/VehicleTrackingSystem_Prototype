let url = '';
var vehicleData;
var getVehicleData =  async function getVehicleData(){
    new Promise((resolve,reject)=>{
        setInterval(function () {
            vehicleData = [
                {
                    "latitude": "20.46497",
                    "longitude": "85.87927",
                    "seatsAvailable": "5"
                },
                {
                    "latitude": "19.8134",
                    "longitude": "85.8315",
                    "seatsAvailable": "2"
                },
                {
                    "latitude": "123.123.123",
                    "longitude": "123.231.232",
                    "seatsAvailable": "3"
                }
            ];
        },3000);
        resolve(vehicleData) ;
    });
};

/*

vehicleData = [
    {
        "latitude": "20.46497",
        "longitude": "85.87927",
        "seatsAvailable": "5"
    },
    {
        "latitude": "19.8134",
        "longitude": "85.8315",
        "seatsAvailable": "2"
    },
    {
        "latitude": "123.123.123",
        "longitude": "123.231.232",
        "seatsAvailable": "3"
    }
];*/
