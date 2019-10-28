$(document).ready(async function () {
   await getVehicleData() ;
   let queryParam = await getQueryParams();
   setInterval(function () {
      if(vehicleData!==undefined){
         $('#loadingData').hide();
         $('#seatsAvailable').show();
         printSeatsAvailable(queryParam);
         console.log("map init is called");
         initMap(queryParam);
      }else{
         $('#loadingData').show();
         $('#seatsAvailable').hide();
      }
   },3000);
});