var ctrl = require('./visualisationEntreprisesCtrl');
var service = require('./visualisationEntreprisesService');
var moduleName = 'relationClient.visualisationEntreprises';

angular.module(moduleName, []);
angular.module(moduleName).factory('visualisationEntreprisesService', ['compteWebResource', '$cookies', 'userService', 'commonServices', service]);
angular.module(moduleName).controller('visualisationEntreprisesCtrl', ['visualisationEntreprisesService', '$uibModal', '$scope', 'userService', ctrl]);

angular.module(moduleName).component('visualisationEntreprises', {
    template: require('./visualisationEntreprises.html'),
    controller: 'visualisationEntreprisesCtrl',
    controllerAs: 'visualisationEntreprisesCtrl',
    bidings: {}
});

module.exports = moduleName;
