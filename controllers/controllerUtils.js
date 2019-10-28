var getQueryParams = function getQueryParams(){
    return new Promise((resolve,reject)=>{
        let url = window.location.href;
        let idx = url.indexOf("?q=");
        let queryParams = parseInt(url.substring(idx+3));
        return resolve(queryParams);
    });

};
