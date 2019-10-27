let url = '';
var vehicleData = [
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
];
var getVehicleData =  async function getVehicleData(){
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
    },100000);
    return vehicleData;
};

//module.export = vehicleData;