var btnWebAPI = document.querySelector('.call-webapi button');
var divWebAPIResult = document.querySelector('.call-webapi .result-data');
btnWebAPI.addEventListener('click', function () {
    fetch('API/dog/Fido')
        .then(function (response) {
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
var btnAzureFunction = document.querySelector('.call-azurefunction button');
var divAzureFunctionResult = document.querySelector('.call-azurefunction .result-data');
btnAzureFunction.addEventListener('click', function () {
    var myHeaders = new Headers();
    var init = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    fetch('https://azurefunctionappfun.azurewebsites.net/api/PersonFunction?code===&personId=7', init)
        .then(function (response) {
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
//# sourceMappingURL=site.js.map