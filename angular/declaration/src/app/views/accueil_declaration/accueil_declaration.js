var ctrl = require('./accueil_declarationCtrl');
var service = require('./accueil_declarationService');

var moduleName = 'declaration.accueil';
angular.module(moduleName, []);

angular.module(moduleName).service('accueil_declarationService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('accueil_declarationCtrl', ['accueil_declarationService', '$window', ctrl]);
angular.module(moduleName).component('accueilDeclaration', {
    template: require('./accueil_declaration.html'),
    controller: 'accueil_declarationCtrl',
    controllerAs: 'accueil_declarationCtrl',
    bindings: {}
}); 
module.exports = moduleName;