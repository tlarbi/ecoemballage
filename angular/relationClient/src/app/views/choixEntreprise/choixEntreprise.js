var ctrl = require('./choixEntrepriseCtrl');
var service = require('./choixEntrepriseService');
var moduleName = 'relationClient.choixEntreprise';
angular.module(moduleName, []);
angular.module(moduleName).factory('choixEntrepriseService', ['userService', 'commonServices', service]);
angular.module(moduleName).controller('choixEntrepriseCtrl', ['choixEntrepriseService', ctrl]);
angular.module(moduleName).component('choixEntreprise', {
    template: require('./choixEntreprise.html'),
    controller: 'choixEntrepriseCtrl',
    controllerAs: 'choixEntrepriseCtrl',
    bindings: {}
});

module.exports = moduleName;