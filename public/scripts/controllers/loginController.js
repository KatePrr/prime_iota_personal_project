myApp.controller('LoginController', ['$scope', '$http', '$location', function($scope, $location, $http) {
// Testing
    console.log('LoginController');
    //
    //$scope.submit = function() {
    //    var uname = $scope.username;
    //    var password = $scope.password;
    //    if($scope.username == 'admin' && $scope.password == 'admin') {
    //        $location.path('/favorites');
    //    }
    //};






    $scope.onSignIn = function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    };

    $scope.signOut = function() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };



}]);
