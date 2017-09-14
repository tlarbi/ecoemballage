var ctrl = require('./rechercheUtilisateurCtrl');
var service = require('./rechercheUtilisateurService');
var moduleName = 'relationClient.rechercheUtilisateur';
angular.module(moduleName, []);
angular.module(moduleName).factory('rechercheUtilisateurService', ['compteWebResource', 'userService', service]);
angular.module(moduleName).controller('rechercheUtilisateurCtrl', ['rechercheUtilisateurService', 'commonServices', 'userService', ctrl]);
angular.module(moduleName).component('rechercheUtilisateur', {
  template: require('./rechercheUtilisateur.html'),
  controller: 'rechercheUtilisateurCtrl',
  controllerAs: 'rechercheUtilisateurCtrl',
  bindings: {}
});

module.exports = moduleName;
