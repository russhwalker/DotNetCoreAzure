
var btnWebAPI: HTMLElement = document.querySelector('.call-webapi button');
var divWebAPIResult: HTMLElement = document.querySelector('.call-webapi .result-data');
btnWebAPI.addEventListener('click', function () {
    fetch('API/dog/Fido')
        .then(function (response:Response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function (json) {
            divWebAPIResult.textContent = JSON.stringify(json);
        }).catch(function (error) {
            divAzureFunctionResult.textContent = 'Fetch Error: ' + error.message;
        });

}, false);


var btnAzureFunction: HTMLElement = document.querySelector('.call-azurefunction button');
var divAzureFunctionResult: HTMLElement = document.querySelector('.call-azurefunction .result-data');
btnAzureFunction.addEventListener('click', function () {

    var myHeaders: HeadersInit = new Headers();
    var init: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    fetch('https://azurefunctionappfun.azurewebsites.net/api/PersonFunction?code===&personId=7', init)
        .then(function (response: Response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function (json) {
            divAzureFunctionResult.textContent = JSON.stringify(json);
        }).catch(function (error) {
            divAzureFunctionResult.textContent = 'Fetch Error: ' + error.message;
        });

}, false);
