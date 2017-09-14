var ctrl = require('./adhesionContractCtrl');
var service = require('./adhesionContractService');
var moduleName = 'relationClient.adhesionContract';
angular.module(moduleName, []);
angular.module(moduleName).factory('adhesionContractService', ['compteWebResource', service]);
angular.module(moduleName).controller('adhesionContractCtrl', ['adhesionContractService', 'userService', '$location', ctrl]);
angular.module(moduleName).component('adhesionContract', {
    template: require('./adhesionContract.html'),
    controller: 'adhesionContractCtrl',
    controllerAs: 'adhesionContractCtrl',
    bindings: {}
});


module.exports = moduleName;
