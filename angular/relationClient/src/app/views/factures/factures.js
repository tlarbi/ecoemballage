var ctrl = require('./facturesCtrl');
var service = require('./facturesService');

var moduleName = 'relationClient.factures';

angular.module(moduleName, []);
angular.module(moduleName).factory('facturesService', ['userService','compteWebResource', service]);
angular.module(moduleName).controller('facturesCtrl', ['facturesService', ctrl]);

angular.module(moduleName).component('factures', {
    template: require('./factures.html'),
    controller: 'facturesCtrl',
    controllerAs: 'facturesCtrl',
    bindings: {}
});

module.exports = moduleName;

