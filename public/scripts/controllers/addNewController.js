myApp.controller('AddNewController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    // TESTING
    console.log('AddNewController');

    // bring in factories
    $scope.dataFactory = DataFactory;
    //$scope.formFactory = FormFactory;

    //initialize array of objects
    $scope.paymentTypes = [
        {payment: 'cash', label: 'Cash'},
        {payment: 'credit_card', label: 'Credit Card'},
        {payment: 'snap_ebt', label: 'Supplemental Nutrition Assistance Program (SNAP)'},
        {payment: 'wic_cash_value_voucher', label: 'WIC Cash Value Vouchers'},
        {payment: 'wic', label: 'WIC Farmers Market Nutrition Program (WIC-FMNP)'},
        {payment: 'sfmnp', label: 'Senior Farmers Markets Nutrition Program (FMNP)'}
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
        {id: 'cheese', label: 'Cheese and/or dairy products'},
        {id: 'cherries', label: 'Cherries'},
        {id: 'coffee_tea', label: 'Coffee and/or tea'},
        {id: 'corn', label: 'Corn'},
        {id: 'cucumber', label: 'Cucumber'},
        {id: 'cut_flowers', label: 'Cut Flowers'},
        {id: 'eggplant', label: 'Eggplant'},
        {id: 'eggs', label: 'Eggs'},
        {id: 'fish_seafood', label: 'Fish and/or seafood'},
        {id: 'flowers', label: 'Flowers'},
        {id: 'fresh_dried_herbs', label: 'Fresh and/or dried herbs'},
        {id: 'garlic', label: 'Garlic'},
        {id: 'grapes', label: 'Grapes'},
        {id: 'honey', label: 'Honey'},
        {id: 'jams', label: 'Jams, Jellies, Salsa'},
        {id: 'lettuce', label: 'Lettuce'},
        {id: 'maple_syrup', label: 'Maple syrup and/or maple products'},
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
        {id: 'poultry', label: 'Poultry'},
        {id: 'pumpkins', label: 'Pumpkins'},
        {id: 'prepared_foods', label: 'Prepared foods'},
        {id: 'radish', label: 'Radish'},
        {id: 'raspberries', label: 'Raspberries'},
        {id: 'rhubarb', label: 'Rhubarb'},
        {id: 'wild_harvest', label: 'Wild harvested products'},
        {id: 'personal_care', label: 'Soaps & Lotions'},
        {id: 'alcohol', label: 'Wine, beer, hard cider'}

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
            city: $scope.city,
            state: $scope.state,
            zip: $scope.zip,
            last_seen: $scope.last_seen,
            products: $scope.selectedProducts.type,
            payment: $scope.selectedPayment.type,
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

    $scope.reset = function () {
        $scope.vendor_name = null;
        $scope.farm_name = null;
        $scope.location = null;
        $scope.city = null;
        $scope.state = null;
        $scope.zip = null;
        $scope.last_seen = null;
        $scope.selectedProducts.type = null;
        $scope.selectedPayment.type = null;
        $scope.website = null;
        $scope.certification = null;
        $scope.phone = null;
        $scope.description = null;
    };


// CHANGE TO ANGULAR $WINDOW.ALERT FUNCTION OR alertsManager
    $scope.alerts = [];

    var newSuccess = function () {
       $scope.alerts.push({msg: 'Your listing has been submitted and will be added shortly. Thank you!'});
    };
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };












}]);






