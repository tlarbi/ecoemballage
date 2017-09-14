var ctrl = require('./modifMotDePasseCtrl');
var service = require('./modifMotDePasseService');
var moduleName = 'relationClient.modifMotDePasse';

angular.module(moduleName, []);
angular.module(moduleName).factory('modifMotDePasseService', ['compteWebResource', service]);
angular.module(moduleName).controller('modifMotDePasseCtrl', ['modifMotDePasseService', 'commonServices', '$scope', 'errorMessagesService', ctrl]);
angular.module(moduleName).component('modifMotDePasse', {
    template: require('./modifMotDePasse.html'),
    controller: 'modifMotDePasseCtrl',
    controllerAs: 'modifMotDePasseCtrl',
    bindings: {}
});

module.exports = moduleName;
