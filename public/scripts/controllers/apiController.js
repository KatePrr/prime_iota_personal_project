myApp.controller('ApiController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log(ApiController);

    $scope.data = {};

    // bring in datafactory
    $scope.dataFactory = DataFactory;

    function marketFinder() {
    //api key
        var key = 'your api key';
        var baseURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=";
        var query =
    }
}





    function getResults(zip) {
        // or
        // function getResults(lat, lng) {
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            // submit a get request to the restful service zipSearch or locSearch.
            url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
            // or
            // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
            dataType: 'jsonp',
            jsonpCallback: 'searchResultsHandler'
        });
    }
//iterate through the JSON result object.
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
/////////////////////////
        function getDetails(id) {
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                // submit a get request to the restful service mktDetail.
                url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id,
                dataType: 'jsonp',
                jsonpCallback: 'detailResultHandler'
            });
        }
//iterate through the JSON result object.
        function detailResultHandler(detailresults) {
            for (var key in detailresults) {
                alert(key);
                var results = detailresults[key];
                alert(results['GoogleLink']);
            }
        }




















        // ng-model :: setting value of search to whatever
    $scope.storeFarm = function() {
        var farmType = $scope.farm;
        console.log(farmType);
        marketFinder(farmType);
    };

    // add:: ng-hide until $scope.farm = true;
    function marketFinder(farmType) {
        // API KEY
        var key =



    }




}]);