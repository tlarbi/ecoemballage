var ctrl = require('./attestationsCtrl');
var service = require('./attestationsService');
var moduleName = 'relationClient.attestations';

angular.module(moduleName, []);
angular.module(moduleName).factory('attestationsService', ['userService','compteWebResource',service]);
angular.module(moduleName).controller('attestationsCtrl', ['attestationsService', ctrl]);

angular.module(moduleName).component('attestations', {
    template: require('./attestations.html'),
    controller: 'attestationsCtrl',
    controllerAs: 'attestationsCtrl',
    bindings: {}
});

module.exports = moduleName;