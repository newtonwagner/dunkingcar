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

    app.controller('AbastecimentoController', function() {
        this.abastecimentos = [{
            data: '01/01/2014',
            valorUnitario: '3.07',
            litros: '42.5'
        },
        {
            data: '01/02/2014',
            valorUnitario: '3.12',
            litros: '39.72'
        }];
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

})();