var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html'
        })
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController'
        })
        .when('/mapview', {
            templateUrl: '/views/templates/mapview.html'
        })
        .when('/addnew', {
            templateUrl: '/views/templates/addnew.html'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
