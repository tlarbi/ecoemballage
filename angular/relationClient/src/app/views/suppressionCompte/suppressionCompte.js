var ctrl = require('./suppressionCompteCtrl');
var service = require('./suppressionCompteService');
var moduleName = 'relationClient.suppressionCompte';

angular.module(moduleName, []);
angular.module(moduleName).factory('suppressionCompteService', ['compteWebResource', service]);
angular.module(moduleName).controller('suppressionCompteCtrl', ['suppressionCompteService', 'userService', '$uibModal', '$scope', 'compteWebResource', 'errorMessagesService', ctrl]);
angular.module(moduleName).component('suppressionCompte', {
  template: require('./suppressionCompte.html'),
  controller: 'suppressionCompteCtrl',
  controllerAs: 'suppressionCompteCtrl',
  bindings: {}
});

module.exports = moduleName;
