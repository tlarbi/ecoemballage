var ctrl = require('./comp2Ctrl');
var service = require('./comp2Service');
var moduleName = 'relationClient.comp2';

angular.module(moduleName, []);
angular.module(moduleName).factory('comp2Service', [service]);
angular.module(moduleName).controller('comp2Ctrl', ['comp2Service', ctrl]);

angular.module(moduleName).component('comp2', {
    template: require('./comp2.html'),
    controller: 'comp2Ctrl',
    controllerAs: 'comp2Ctrl',
    bindings: {}
});

module.exports = moduleName;