var ctrl = require('./donneesPersonnellesCtrl');
var service = require('./donneesPersonnellesService');
var moduleName = 'relationClient.donneesPersonnelles';
angular.module(moduleName, []);
angular.module(moduleName).factory('donneesPersonnellesService', ['compteWebResource', '$cookies', 'userService', service]);
angular.module(moduleName).controller('donneesPersonnellesCtrl', ['donneesPersonnellesService', 'userService', 'commonServices', '$filter', '$q', 'errorMessagesService', ctrl]);
angular.module(moduleName).component('donneesPersonnelles', {
    template: require('./donneesPersonnelles.html'),
    controller: 'donneesPersonnellesCtrl',
    controllerAs: 'donneesPersonnellesCtrl',
    bindings: {}
});

module.exports = moduleName;
