myApp.controller('SearchController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
// TESTING
    console.log('SearchController');
// bring in datafactory
    $scope.dataFactory = DataFactory;
    //$scope.detailsArray = [];

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


// MAP VIEW
    $scope.mapView = function(location, state, zip){
        console.log('View the map function called!', location + state + zip );
    };
// api map link
    $scope.apiMapView = function(value){
        console.log("api map view function called: ", value);

    };


// UI.BOOTSTRAP ACCORDION
   $scope.getDetails = function() {
       //console.log(this.market.id);
       $scope.detailsArray = [];
       var id = this.market.id;
       console.log(id);
        // api query to factory
        $scope.dataFactory.factoryDetailApiData(id).then(function() {
            $scope.detailedApiResults = $scope.dataFactory.factoryExportDetailApiResults();
            //console.log($scope.detailedApiResults);
            $scope.detailsArray.push($scope.detailedApiResults);
        });
   };

// Accordion: show 1 at a time
     $scope.oneAtATime = true;

    //$scope.status = {
    //    isFirstOpen: true,
    //    isFirstDisabled: false
    //};

// FILTERS!!!
// Remove extraneous numbers from accordion heading
    $scope.cleanVendor = function(string){
        for(var i = 0; i < string.length; i++){
            if(string[i] == ' ') {
                return string.slice(i, string.length);
            }
        }
    };









}]);





//      http://maps.google.com/?q=45.67778%2C%20-111.0404%20(%22Bozeman+Winter+Farmers'+Market%22)
//      http://maps.google.com/?q=(corner+of+peach+and+montana)Bozeman+Montana+59715

//    https://www.google.com/maps/place/E+Peach+St+%26+N+Montana+Ave,+Bozeman,+Mt+59715/@45.6855625,-111.0353249,17z/data=!3m1!4b1!4m2!3m1!1s0x534544436d3cb5a9:0xd5c0174692da4759