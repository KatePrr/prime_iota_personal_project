myApp.controller('AddNewController', ['$scope', 'DataFactory',  function($scope, DataFactory) {
    // TESTING
    console.log('AddNewController');

    // bring in datafactory
    $scope.dataFactory = DataFactory;

    //initialize array of objects
    $scope.paymentTypes = [
        {payment: 'cash', label: 'Cash'},
        {payment: 'plastic', label: 'Plastic'},
        {payment: 'snap_ebt', label: 'SNAP/EBT'},
        {payment: 'wic', label: 'WIC'},
        {payment: 'fmnp', label: 'FMNP'}
    ];
    // create blank array to store selected payment types.
    $scope.selectedPayment = {
        type: []
    };
    // produce array of objects
    $scope.produceTypes = [
        {id: 'apples', label: 'Apples'},
        {id: 'apple_cider', label: 'Apple Cider'},
        {id: 'asparagus', label: 'Asparagus'},
        {id: 'baked_goods', label: 'Baked Goods'},
        {id: 'beans', label: 'Beans'},
        {id: 'beets', label: 'Beets'},
        {id: 'blackberries', label: 'Blackberries'},
        {id: 'blueberries', label: 'Blueberries'},
        {id: 'broccoli', label: 'Broccoli'},
        {id: 'brussel_sprouts', label: 'Brussel Sprouts'},
        {id: 'cabbage', label: 'Cabbage'},
        {id: 'cantaloupe', label: 'Cantaloupe'},
        {id: 'carrots', label: 'Carrots'},
        {id: 'cauliflower', label: 'Cauliflower'},
        {id: 'cheese', label: 'Cheese'},
        {id: 'cherries', label: 'Cherries'},
        {id: 'corn', label: 'Corn'},
        {id: 'cucumber', label: 'Cucumber'},
        {id: 'eggplant', label: 'Eggplant'},
        {id: 'eggs', label: 'Eggs'},
        {id: 'flowers', label: 'Flowers'},
        {id: 'garlic', label: 'Garlic'},
        {id: 'grapes', label: 'Grapes'},
        {id: 'herbs', label: 'Herbs'},
        {id: 'honey', label: 'Honey'},
        {id: 'jams', label: 'Jams, Jellies, Salsa'},
        {id: 'lettuce', label: 'Lettuce'},
        {id: 'meat', label: 'Meats'},
        {id: 'mushrooms', label: 'Mushrooms'},
        {id: 'nectarines', label: 'Nectarines'},
        {id: 'onions', label: 'Onions'},
        {id: 'peaches', label: 'Peaches'},
        {id: 'pears', label: 'Pears'},
        {id: 'peas', label: 'Peas'},
        {id: 'peppers', label: 'Peppers'},
        {id: 'pickles', label: 'Pickles'},
        {id: 'plums', label: 'Plums'},
        {id: 'potatoes', label: 'Potatoes'},
        {id: 'pumpkins', label: 'Pumpkins'},
        {id: 'radish', label: 'Radish'},
        {id: 'raspberries', label: 'Raspberries'},
        {id: 'rhubarb', label: 'Rhubarb'},
        {id: 'personal_care', label: 'Soaps & Lotions'},
    ];
// create blank array to store selected product types.
    $scope.selectedProducts = {
        type: []
    };

    // collect form data
    $scope.submitNew = function () {
        var newVendor = {
            vendor_name: $scope.vendor_name,
            farm_name: $scope.farm_name,
            location: $scope.location,
            last_seen: $scope.last_seen,
            products: $scope.selectedProducts.type,
            payment:$scope.selectedPayment.type,
            website: $scope.website,
            certification: $scope.certification,
            phone: $scope.phone,
            description: $scope.description
        };
        console.log(newVendor);
        $scope.dataFactory.factorySaveNew(newVendor);
        newSuccess();
        $scope.reset();
    };

    $scope.reset = function() {
        $scope.vendor_name = '';
        $scope.farm_name = '';
        $scope.location = '';
        $scope.last_seen = '';
        $scope.selectedProducts.type = [];
        $scope.selectedPayment.type = [];
        $scope.website = '';
        $scope.certification = '';
        $scope.phone = '';
        $scope.description= '';
    };

// CHANGE TO ANGULAR $WINDOW.ALERT FUNCTION OR alertsManager
    var newSuccess = function(){
        alert('The new farmstand will be added to the list shortly! Thank you!')
    };





}]);