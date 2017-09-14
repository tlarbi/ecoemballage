var ctrl = require('./adhesionSimplifieeCtrl');
var service = require('./adhesionSimplifieeService');
var moduleName = 'relationClient.adhesionSimplifiee';
angular.module(moduleName, []);
angular.module(moduleName).factory('adhesionSimplifieeService', ['compteWebResource', service]);
angular.module(moduleName).controller('adhesionSimplifieeCtrl', ['adhesionSimplifieeService', 'commonServices', 'userService', 'popupsAdhesionService', '$filter', '$location', '$scope', ctrl]);
angular.module(moduleName).component('adhesionSimplifiee', {
    template: require('./adhesionSimplifiee.html'),
    //template: require('./test.html'),
    controller: 'adhesionSimplifieeCtrl',
    controllerAs: 'adhesionSimplifieeCtrl',
    bindings: {}
});


module.exports = moduleName;
