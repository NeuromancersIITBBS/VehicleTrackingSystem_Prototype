var getQueryParams = function getQueryParams(){
    let url = window.location.href;
    let idx = url.indexOf("?q=");
    let queryParams = parseInt(url.substring(idx+3));
    return queryParams;
};