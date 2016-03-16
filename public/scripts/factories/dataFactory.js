myApp.factory('DataFactory', ['$http', function($http) {

// PRIVATE
var databaseResults = undefined;
var apiData = undefined;

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

//////// NEW CODE FOR DETAILS: ITERATE THROUGH THE JSON RESULT OBJECT.-------------------------------
    function searchResultsHandler(searchResults) {
        for (var key in searchresults) {
            alert(key);
            var results = searchresults[key];
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                for (var key in result) {
                    //only do an alert on the first search result
                    if (i == 0) {
                        alert(result[key]);
                    }
                }
            }
        }
    }
//////// END NEW CODE FOR DETAILS ------------------------------------------------------


    // database search
        $http.get('/vendor/' + searchCriteria).then(function (response) {
            console.log('getting search from database', searchCriteria);
            databaseResults = response.data;
            console.log('database results: ', databaseResults);
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
    factoryExportApiSearchResults: function() {
        return apiData;
    },
    factoryExportDBSearchResults: function() {
        return databaseResults;
    }
};

return userData;


}]);