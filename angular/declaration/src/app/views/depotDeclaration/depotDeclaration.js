var ctrl = require('./depotDeclarationCtrl');
var service = require('./depotDeclarationService');
var moduleName = 'declaration.depotDeclaration';

angular.module(moduleName, []);
angular.module(moduleName).factory('depotDeclarationService', ['declarationResource', 'popupsService', service]);
angular.module(moduleName).controller('depotDeclarationCtrl', ['depotDeclarationService', 'userService', ctrl]);
angular.module(moduleName).component('depotDeclaration', {
    template: require('./depotDeclaration.html'),
    controller: 'depotDeclarationCtrl',
    controllerAs: 'depotDeclarationCtrl',
    bindings: {}
});


module.exports = moduleName;