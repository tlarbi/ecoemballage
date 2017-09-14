var ctrl = require('./lancementrpcCtrl');
var service = require('./lancementrpcService');
var moduleName = 'declaration.lancementrpc';
angular.module(moduleName, []);

var app = angular.module(moduleName, []);


angular.module(moduleName).service('lancementrpcService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('lancementrpcCtrl', ['lancementrpcService', '$location', '$uibModal', '$scope', '$filter', ctrl]);
angular.module(moduleName).component('lancementrpc', {
    template: require('./lancementrpc.html'),
    controller: 'lancementrpcCtrl',
    controllerAs: 'lancementrpcCtrl',
    bindings: {
    }
});

module.exports = moduleName;





