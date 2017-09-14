var ctrl = require('./headerCtrl');
var service = require('./headerService');
var moduleName = 'relationClient.header';
angular.module(moduleName, []);
angular.module(moduleName).factory('headerService', ['userService', 'compteWebResource', '$q', service]);
angular.module(moduleName).controller('headerCtrl', ['headerService', ctrl]);
angular.module(moduleName).component('customHeader', {
    template: require('./header.html'),
    controller: 'headerCtrl',
    controllerAs: 'headerCtrl',
    bindings: {}
});

module.exports = moduleName;