$(document).ready(async function () {
   await getVehicleData() ;
   let queryParam = await getQueryParams();
   setInterval(function () {
      if(vehicleData!==undefined && map!==undefined){
         $('#loadingData').hide();
         $('#seatsAvailable').show();
         printSeatsAvailable(queryParam);
         refreshMarker(queryParam);
      }else{
         $('#loadingData').show();
         $('#seatsAvailable').hide();
      }
   },3000);
});
