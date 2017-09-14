var ctrl = require('./RecommandationCtrl');
var service = require('./RecommandationService');
var moduleName = 'declaration.recommandation';
angular.module(moduleName, []);

angular.module(moduleName).controller('recommandationCtrl', ['recommandationService',ctrl]);
angular.module(moduleName).factory('recommandationService', ['declarationResource', service]);
angular.module(moduleName).component('recommandation', {
  template: require('./recommandation.html'),
  controller: 'recommandationCtrl',
  controllerAs: 'recommandationCtrl',
  bindings: {
  }
});

module.exports = moduleName;
