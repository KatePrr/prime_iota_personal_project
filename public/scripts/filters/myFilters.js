myApp.filter('split', function(){
    return function(input) {
        if (!input || !input.length) {return; }
        return input.replace(/,/g, ', ');
    }
});

myApp.filter('underscoreless', function () {
    return function (input) {
        if (!input || !input.length) {return; }
        return input.replace(/_/g, ' ');
    };
});

myApp.filter('semicolon', function () {
    return function (input) {
        if (!input || !input.length) {return; }
        return input.replace(/;/g, ',');
    };
});
