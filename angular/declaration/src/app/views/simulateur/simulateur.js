var ctrl = require('./simulateurCtrl');
var service = require('./simulateurService');
var moduleName = 'declaration.simulateur';
angular.module(moduleName, []);
 
angular.module(moduleName).service('simulateurService', ['declarationResource', service]);
angular.module(moduleName).controller('simulateurCtrl', ['simulateurService', 'userService', ctrl]);
angular.module(moduleName).component('simulateur', {
    template: require('./simulateur.html'),
    controller: 'simulateurCtrl',
    controllerAs: 'simulateurCtrl',
  bindings: {
  }
});

module.exports = moduleName;

