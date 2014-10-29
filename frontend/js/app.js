(function() {

    var app = angular.module('nwfuel', []);

    app.controller('CarController', function() {
        this.cars = [{
            nickname: 'Bohemio Movel',
            realname: 'Classic 2009'
        },
        {
            nickname: 'BoheTyr Movel', 
            realname: 'J3 Turin'
        }];
    });

})();