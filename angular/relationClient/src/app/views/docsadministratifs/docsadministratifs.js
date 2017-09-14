var ctrl = require('./docsadministratifsCtrl');
var service = require('./docsadministratifsService');
var moduleName = 'relationClient.docsadministratifs';

angular.module(moduleName, []);
angular.module(moduleName).factory('docsadministratifsService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('docsadministratifsCtrl', ['docsadministratifsService', ctrl]);

angular.module(moduleName).component('docsadministratifs', {
    template: require('./docsadministratifs.html'),
    controller: 'docsadministratifsCtrl',
    controllerAs: 'docsadministratifsCtrl',
    bindings: {}
});

module.exports = moduleName;

