var ctrl = require('./comp1Ctrl');
var service = require('./comp1Service');
var moduleName = 'relationClient.comp1';

angular.module(moduleName, []);
angular.module(moduleName).factory('comp1Service', [service]);
angular.module(moduleName).controller('comp1Ctrl', ['comp1Service', ctrl]);

angular.module(moduleName).component('comp1', {
    template: require('./comp1.html'),
    controller: 'comp1Ctrl',
    controllerAs: 'comp1Ctrl',
    bindings: {}
});

module.exports = moduleName;