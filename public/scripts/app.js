var myApp = angular.module('myApp', ['ngRoute', 'checklist-model', 'ui.bootstrap', 'ngAnimate', 'ngTouch', 'angular.filter']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'SearchController'
        })
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController'
        })
        .when('/mapview', {
            templateUrl: '/views/templates/mapview.html',
            controller: 'MapController'
        })
        .when('/addnew', {
            templateUrl: '/views/templates/addnew.html',
            controller: 'AddNewController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html'
        })

        .otherwise({
            redirectTo: 'home'
        });
}]);


// my app config(function(uiGmapGoogleMapApiProvider