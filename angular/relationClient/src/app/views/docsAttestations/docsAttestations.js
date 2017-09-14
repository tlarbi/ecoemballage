var ctrl = require('./docsAttestationsCtrl');
var service = require('./docsAttestationsService');
var moduleName = 'relationClient.docsAttestations';

angular.module(moduleName, []);
angular.module(moduleName).factory('docsAttestationsService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('docsAttestationsCtrl', ['docsAttestationsService', ctrl]);

angular.module(moduleName).component('docsAttestations', {
    template: require('./docsAttestations.html'),
    controller: 'docsAttestationsCtrl',
    controllerAs: 'docsAttestationsCtrl',
    bindings: {}
});

module.exports = moduleName;