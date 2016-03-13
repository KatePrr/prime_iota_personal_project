myApp.controller('SearchController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    console.log('SearchController');

    // bring in datafactory
    $scope.dataFactory = DataFactory;

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