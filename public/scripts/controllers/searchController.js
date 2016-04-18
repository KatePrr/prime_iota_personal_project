myApp.controller('SearchController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
// TESTING
    console.log('SearchController');
    $scope.dataFactory = DataFactory;
    var selectedID = undefined;

//button from home.html call function search():
    $scope.search = function() {
        var searchCriteria = $scope.searchBox;
        console.log('searchController: ', searchCriteria);
        // search
       searchCriteria = parseInt(searchCriteria);
       $scope.dataFactory.factoryRetrieveData(searchCriteria).then(function() {
           $scope.apiResults = $scope.dataFactory.factoryExportApiSearchResults();
           $scope.databaseResults = $scope.dataFactory.factoryExportDBSearchResults();
            toString($scope.databaseResults);
       });
        // clear searchBox
        $scope.searchBox = null;
    };


//Direct to mapview.html
    $scope.seeTheMap = function(){
        $location.url("/mapview");
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

     if(parseInt(id) !== selectedID) {
       // api query to factory
       $scope.dataFactory.factoryDetailApiData(id).then(function () {
         $scope.detailedApiResults = $scope.dataFactory.factoryExportDetailApiResults();
         //console.log($scope.detailedApiResults);
         $scope.detailsArray.push($scope.detailedApiResults);
         selectedID = parseInt(id);
         console.log('id ', id);
       });
       //selectedID = parseInt(id);
       console.log('selected ID:::::: ',selectedID)

     }else{
       selectedID = undefined;
     }
     };


// Accordion: show 1 at a time
     $scope.oneAtATime = true;


// Filter: remove extraneous numbers from accordion heading
    $scope.cleanVendor = function(string){
        for(var i = 0; i < string.length; i++){
            if(string[i] == ' ') {
                return string.slice(i, string.length);
            }
        }
    };

}]);