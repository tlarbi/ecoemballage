var ctrl = require('./reinitialisationMotDePasseCtrl');
var service = require('./reinitialisationMotDePasseService');
var moduleName = 'relationClient.reinitialisationMotDePasse';

angular.module(moduleName, []);
angular.module(moduleName).factory('reinitialisationMotDePasseService', ['compteWebResource', 'userService', service]);
angular.module(moduleName).controller('reinitialisationMotDePasseCtrl', ['reinitialisationMotDePasseService', '$location', 'commonServices', ctrl]);

angular.module(moduleName).component('reinitialisationMotDePasse', {
    template: require('./reinitialisationMotDePasse.html'),
    controller: 'reinitialisationMotDePasseCtrl',
    controllerAs: 'reinitialisationMotDePasseCtrl',
    bindings: {}
});

module.exports = moduleName;