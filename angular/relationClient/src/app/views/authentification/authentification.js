var ctrl = require('./authentificationCtrl');
var service = require('./authentificationService');
var moduleName = 'relationClient.authentification';
angular.module(moduleName, []);
angular.module(moduleName).factory('authentificationService', ['compteWebResource', 'userService', 'commonServices', service]);
angular.module(moduleName).controller('authentificationCtrl', ['authentificationService', '$uibModal', '$scope', '$location', 'commonServices', '$timeout', 'userService', ctrl]);
angular.module(moduleName).component('authentification', {
    template: require('./authentification.html'),
    controller: 'authentificationCtrl',
    controllerAs: 'authentificationCtrl',
    bindings: {}
});

module.exports = moduleName;
