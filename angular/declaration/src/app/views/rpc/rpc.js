var ctrl = require('./rpcCtrl');
var service = require('./rpcService');
var moduleName = 'declaration.rpc';
angular.module(moduleName, ['ui.bootstrap']);

angular.module(moduleName).service('rpcService', ['declarationResource', 'userService', 'unauthorizedPopInService', service]);
angular.module(moduleName).controller('rpcCtrl', ['rpcService', '$uibModal', '$scope', '$location', '$window', ctrl]);
angular.module(moduleName).component('rpc', {
    template: require('./rpc.html'),
    controller: 'rpcCtrl',
    controllerAs: 'rpcCtrl',
    bindings: {}
});

module.exports = moduleName;