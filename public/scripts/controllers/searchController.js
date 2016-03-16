myApp.controller('SearchController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
// TESTING
    console.log('SearchController');
// bring in datafactory
    $scope.dataFactory = DataFactory;


//button from home.html call function search():
    $scope.search = function() {
        var searchCriteria = $scope.searchBox;
        console.log('searchController: ', searchCriteria);
        // search
       searchCriteria = parseInt(searchCriteria);
       $scope.dataFactory.factoryRetrieveData(searchCriteria).then(function() {
           $scope.apiResults = $scope.dataFactory.factoryExportApiSearchResults();
           $scope.databaseResults = $scope.dataFactory.factoryExportDBSearchResults();
       });
        // clear searchBox
        $scope.searchBox = null;
    };

// collapsable menu




    $scope.mapView = function(){
        console.log('View the map function called!');
    };
//////////////// UI.BOOTSTRAP ACCORDION
    $scope.oneAtATime = true;

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };


}]);