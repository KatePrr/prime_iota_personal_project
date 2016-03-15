var myApp = angular.module('myApp', ['ngRoute', 'checklist-model']);

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
            templateUrl: '/views/templates/mapview.html'
        })
        .when('/addnew', {
            templateUrl: '/views/templates/addnew.html',
            controller: 'AddNewController'
        })
        //.when('/', {
        //    templateUrl: '/views/templates/login.html',
        //    controller: 'LogInController'
        //})
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html'
        })

        .otherwise({
            redirectTo: 'home'
        });
}]);
