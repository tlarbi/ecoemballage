var ctrl = require('./inscriptionCtrl');
var service = require('./inscriptionService');
var moduleName = 'relationClient.inscription';

angular.module(moduleName, []);
angular.module(moduleName).factory('inscriptionService', ['compteWebResource', service]);
angular.module(moduleName).controller('inscriptionCtrl', ['inscriptionService', 'vcRecaptchaService', 'userService', 'commonServices', ctrl]);

angular.module(moduleName).component('inscription', {
    template: require('./inscription.html'),
    controller: 'inscriptionCtrl',
    controllerAs: 'inscriptionCtrl',
    bindings: {}
});

module.exports = moduleName;