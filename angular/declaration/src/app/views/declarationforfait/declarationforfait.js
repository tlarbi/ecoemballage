var ctrl = require('./declarationforfaitCtrl');
var service = require('./declarationforfaitService');
var moduleName = 'declaration.declarationforfait';
angular.module(moduleName, []);
 
angular.module(moduleName).service('declarationforfaitService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('declarationforfaitCtrl', ['declarationforfaitService', '$uibModal', '$scope', '$location','$window', ctrl]);
angular.module(moduleName).component('declarationforfait', {
    template: require('./declarationforfait.html'),
    controller: 'declarationforfaitCtrl',
    controllerAs: 'declarationforfaitCtrl',
  bindings: {
  }
});

module.exports = moduleName;

