let url = 'http://127.0.0.1:5000/';
var vehicleData;
var getVehicleData =  async function getVehicleData(){
    new Promise((resolve,reject)=>{
        setInterval(function () {




var xml;

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/",
        dataType: "text",
        success : function(data) {
            window.vehicleData = JSON.parse(data);
        }
    });

    console.log(window.vehicleData);


        },5000);
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
