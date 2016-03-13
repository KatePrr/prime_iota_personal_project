myApp.factory('DataFactory', ['$http', function($http) {

// PRIVATE

// add new to database
var saveToDB = function(newVendor){
    console.log('saving new entry');
    var promise = $http.post('/vendor', newVendor).then(function(response){
        console.log('task saved');
        //return anything?
    });
    return promise;
};






// PUBLIC

var userData = {
    factorySaveNew: function(newVendor) {
        return saveToDB(newVendor);
    }

};

return userData;


}]);