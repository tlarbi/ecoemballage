var ctrl = require('./oubliMotDePasseCtrl');
var service = require('./oubliMotDePasseService');
var moduleName = 'relationClient.oubliMotDePasse';

angular.module(moduleName, []);
angular.module(moduleName).factory('oubliMotDePasseService', ['compteWebResource', service]);
angular.module(moduleName).controller('oubliMotDePasseCtrl', ['oubliMotDePasseService', 'commonServices', ctrl]);

angular.module(moduleName).component('oubliMotDePasse', {
    template: require('./oubliMotDePasse.html'),
    controller: 'oubliMotDePasseCtrl',
    controllerAs: 'oubliMotDePasseCtrl',
    bindings: {}
});

module.exports = moduleName;