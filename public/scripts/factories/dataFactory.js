myApp.factory('DataFactory', ['$http', function($http) {
// PRIVATE
var databaseResults = undefined;
var apiData = undefined;
var detailedApiData = undefined;

// add new to database
var saveToDB = function(newVendor){
    console.log('saving new entry');
    var promise = $http.post('/vendor', newVendor).then(function(response){
        console.log('new entry saved');
        //return anything?
    });
    return promise;
};


var masterSearch = function(searchCriteria) {
    console.log('API & database search from factory', searchCriteria);
    // api search
    var url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + searchCriteria + "&callback=JSON_CALLBACK";
    var promise = $http.jsonp(url).then(function(response) {
        apiData = response.data.results;
        console.log('Async data response: ', apiData);
    });

    // database search
        $http.get('/vendor/' + searchCriteria).then(function (response) {
            console.log('getting search from database', searchCriteria);
            databaseResults = response.data;
            console.log('database results: ', databaseResults);
        });

    return promise;
};


//// DETAILED INFORMATION API CALL FROM SEARCH PAGE USING ID.
var marketDetails = function(id) {
    console.log('API detailed results for id: ', id);
    var url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id + "&callback=JSON_CALLBACK";
    var promise = $http.jsonp(url).then(function(response) {
        detailedApiData = response.data.marketdetails;
        console.log('Async data response: ', detailedApiData);
    });
    return promise;
};




// PUBLIC

var userData = {
    factorySaveNew: function(newVendor) {
        return saveToDB(newVendor);
    },
    factoryRetrieveData: function(searchCriteria) {
        return masterSearch(searchCriteria);
    },
    factoryDetailApiData: function(id) {
        return marketDetails(id);
    },
    factoryExportApiSearchResults: function() {
        return apiData;
    },
    factoryExportDBSearchResults: function() {
        return databaseResults;
    },
    factoryExportDetailApiResults: function() {
        return detailedApiData;
    }
};

return userData;


}]);