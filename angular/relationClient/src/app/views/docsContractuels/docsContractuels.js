var ctrl = require('./docsContractuelsCtrl');
var service = require('./docsContractuelsService');
var moduleName = 'relationClient.docsContractuels';

angular.module(moduleName, []);
angular.module(moduleName).factory('docsContractuelsService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('docsContractuelsCtrl', ['docsContractuelsService', ctrl]);

angular.module(moduleName).component('docsContractuels', {
    template: require('./docsContractuels.html'),
    controller: 'docsContractuelsCtrl',
    controllerAs: 'docsContractuelsCtrl',
    bindings: {}
});

module.exports = moduleName;