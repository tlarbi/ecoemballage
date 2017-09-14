var ctrl = require('./controleecartCtrl');
var service = require('./controleecartService');
var moduleName = 'declaration.controleecart';
angular.module(moduleName, []);

var app = angular.module(moduleName, []);

angular.module(moduleName).service('controleecartService', ['declarationResource','userService',service]);
angular.module(moduleName).controller('controleecartCtrl', ['controleecartService','$location','$uibModal','$filter','$scope','userService', ctrl]);
angular.module(moduleName).component('controleecart', {
    template: require('./controleecart.html'),
    controller: 'controleecartCtrl',
    controllerAs: 'controleecartCtrl',
    bindings: {
        declarationid: '@',
        onvalidate: '&',
        onback: '&'
    }
});

module.exports = moduleName;





